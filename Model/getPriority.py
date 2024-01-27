#read cases.csv
# read cleaned.json
import numpy as np
import json
import os
import vertexai
#from vertexai.language_models import TextGenerationModel
from vertexai.preview.language_models import TextGenerationModel
cases = open('cases.json')
cases = json.load(cases)
print("Initialing Vertex AI")
vertexai.init(project="directed-mender-412414", location="us-central1")
parameters = {
    "max_output_tokens": 8192,
    "temperature": 1,
    "top_p": 1,
    "top_k": 40
}
print("Vertex AI Initialized")
for index, row in enumerate(cases):
    # remove _id and case_id
    row.pop('_id')
    row.pop('case_id')

    model = TextGenerationModel.from_pretrained("gemini-pro")
    response = model.predict(
        f"Assign a priority score from 1 to 10 to the cases below. 1 being the highest priority and 10 being the lowest priority. {row}",
        **parameters
    )
    print(f"Response from Model: {response.text}")
    cases.at[index, 'response'] = response.text
    cases.to_csv('cases-new.csv', index=False)
    print(f"Response from Model: {response.text}")
    if index == 1:
        break
