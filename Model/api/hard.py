import vertexai
from vertexai.preview.generative_models import GenerativeModel, Part
import json


# noinspection PyInterpreter
def generate(promt):
    f"""Assign a priority score from 1 to 10 to the cases below. 1 being the highest priority and 10 being the lowest priority. Predict the pririty considering all the keys in the object provided
         input:
      \"case_id\": 217806,
      \"Case Type\": \"Criminal\",
      \"Case Complexity\": 3,
      \"Filing Date\": \"13-Jul-2010\",
      \"Case Value\": \"\",
      \"Alternative Dispute Resolution (ADR) Opportunities\": 1,
      \"Number of Hearings\": 1,
      \"Party information\": [
        \"Petitioner: Ved Prakash Verma\",
        \"Respondents: State Of U.P.\"
      ],
      \"Number of Parties Involved\": 2,
      \"Legal Representation\": \"yes\",
      \"Sections\": [
        \"376\",
        \"452\"
      ],
      \"Legal Grounds\": [
        \"Allegation of rape\",
        \"Allegation of presence at the scene of the occurrence\",
        \"Allegation of complicity in offence\"
      ],
      \"Statutory Compliance\": false,
      \"Urgency Factors\": 1,
      \"Appeals and Revision Petitions\": false,
      \"Geographic Factors\": \"District Faizabad\",
      \"State of Filing\": \"Uttar Pradesh\",
      \"Public interest\": 0,
      \"Volume of Evidence\": 1,
      \"Number of Legal Issues\": 3,
      \"Time Sensitivity\": 1,
      \"Case Severity\": 7

    output: 8.16
    input: {promt}
    output:
          """
    model = GenerativeModel("gemini-pro")
    responses = model.generate_content(
        f"""{promt}""",
        generation_config={
            "max_output_tokens": 8192,
            "temperature": 1,
            "top_p": 1,
            "top_k": 40
        },
        stream=True,
    )

    res = ''
    for response in responses:
        res += response.text
    # print(res)
    return res
