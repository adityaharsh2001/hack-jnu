from flask import Flask, request, jsonify
import vertexai
from vertexai.preview.language_models import TextGenerationModel
import getPrompt
app = Flask(__name__)

vertexai.init(project="directed-mender-412414", location="us-central1")
parameters = {
    "max_output_tokens": 8192,
    "temperature": 1,
    "top_p": 1
}
model = TextGenerationModel.from_pretrained("gemini-pro")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.json
        prompt = getPrompt.getPrompt(input_data)
        response = model.predict(prompt, **parameters)
        result = {"response": response.text}
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
