from flask import Flask, request, jsonify
import vertexai
from vertexai.preview.generative_models import GenerativeModel, Part
import getPrompt
import json
import re
import pymongo
from pymongo import MongoClient


app = Flask(__name__)
vertexai.init(project="directed-mender-412414", location="us-central1")
parameters = {
    "max_output_tokens": 8192,
    "temperature": 1,
    "top_p": 1
}
model = GenerativeModel("gemini-pro")


def clean_string(input_string):
    # Remove newline characters and replace with a space
    cleaned_string = re.sub(r'\n', ' ', input_string)

    # Remove multiple spaces and replace with a single space
    cleaned_string = re.sub(r'\s+', ' ', cleaned_string)

    # Remove other escape characters (e.g., \t, \r)
    cleaned_string = re.sub(r'\\[ntr]', '', cleaned_string)

    # Remove multiple dashes and replace with a single dash
    cleaned_string = re.sub(r'-{2,}', '-', cleaned_string)

    # Remove multiple equals and replace with a single equals
    cleaned_string = re.sub(r'={2,}', '=', cleaned_string)

    # remove \
    cleaned_string = re.sub(r'\\', '', cleaned_string)

    return cleaned_string


def convert_to_valid_json(input_str):
    try:
        # Remove all backslashes from the input string
        corrected_str = input_str.replace('\\', '')

        # Load the corrected JSON string as a dictionary
        # result_dict = json.loads(corrected_str)

        # Convert the dictionary to a valid JSON string with proper indentation
        # valid_json = json.dumps(corrected_str, indent=4)
        valid_json = corrected_str
        return valid_json
    except json.JSONDecodeError as e:
        return f"Error: {str(e)}"

#hello world
@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predict', methods=['POST'])
def predict():
    try:
        print(request)
        input_data = request.json['input']
        # change input data from json to string
        input_data = str(input_data)
        prompt = getPrompt.getPrompt(input_data)
        response = model.generate_content(prompt, generation_config={
            "max_output_tokens": 8192,
            "temperature": 1,
            "top_p": 1,
            "top_k": 40,
        })
        result = response.text
        result = clean_string(result)
        # result = convert_to_valid_json(result)
        # write to json file

        with open('result.json', 'w') as fp:
            json.dump(result, fp)
        # read from json file
        with open('result.json', 'r') as fp:
            result = json.load(fp)
        result = json.loads(result)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=False)
