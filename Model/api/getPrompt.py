def getPrompt(input):
    prompt = """Case Type(string): Categorise cases based on their legal nature (e.g., civil, criminal, family, commercial, etc)
        Case Complexity(integer): Assess the complexity level, which can be determined based on legal precedents, number of parties involved, and legal issues raised (score between 1 to 10)
        Filing Date(DD-MM-YYYY): The date when the case was filed.
        Case age(integer): The time elapsed since the case was filed.
        Case Value(in monetary terms): Consider the monetary or social value of the case to prioritise high-impact cases.
        Alternative Dispute Resolution (ADR) Opportunities: Recognise cases suitable for ADR methods like mediation or arbitration, which can expedite resolution.
        Number of Hearings(integer): Count of hearings conducted for the case.
        Party information(string): Plaintiffs and Defendants,
        Number of Parties Involved(integer): Number of Plaintiffs and Defendants, Assess the number of parties involved.
        Legal Representation(boolean): Determine if the parties have legal representation or are self-represented.
        Sections(String[]): Sections Under Defendant is charged
        Legal Grounds(String[]): Identify the legal grounds on which the case is based.
        Statutory Compliance(boolean): Check if the case involves issues related to compliance with statutory requirements.
        Urgency Factors(Integer): Identify cases that require immediate attention, such as matters involving interim relief, public interest, or time-sensitive issues.(score between 1 to 10)
        Appeals and Revision Petitions(Boolean): Cases with pending appeals or revision petitions may be prioritised differently.
        Geographic Factors(String):Consider the geographic location of the case and the court's jurisdiction.
        State of Filing(String): State or UT in which the case was filed
        Public interest(integer): Use google's historical data to calculate public interest in the field, (0 being least and 10 being most)
        Volume of Evidence(integer): The amount of evidence presented in a case, such as documents, exhibits, witnesses, and expert testimony, can be quantified in terms of the number of pages, documents, or hours of testimony.(score between 1 to 10)
        Number of Legal Issues(integer): The number of distinct legal issues or claims raised in a case can be an indicator of complexity. Counting the legal issues and sub-issues can provide a quantitative measure.
        Time Sensitivity(integer): Cases with strict time limitations or deadlines may be considered more complex due to the need for expedited proceedings (score between 1 to 10)
        Case Severity(integer): Describe How Serious the matter is, for example a minor robbery is less severe, but a bank robbery is more severe, terrorism is more severe(score between 1 to 10)

        input: {
        {"t": "Roghu Nath Pershad And Anr. vs Harlal Sadhu And Ors. on 4 March, 1891",
        "s": "Calcutta High Court",
        "id": 216203,
        "d": "JUDGMENT Tottenham and Ameer Ali, JJ.1. This was a suit to recover money due upon a mortgage by the sale of the mortgaged properties, which were the five properties originally mortgaged; and it appears that some have since passed out of the hands of the original mortgagor.2. The present owners were made parties to the suit. The present appeal has been preferred by one of those parties, the original defendant No. 12; and the point which we have to decide is whether by virtue of Section 82 of the Transfer of Property Act this defendant is entitled to require the plaintiff, mortgagee, to apportion his claim amongst the various properties mortgaged, and to accept from the appellant his rateable share only.3. The learned Pleader for the Appellant has not been able to put before us any authority for his construction of Section 82 of the Transfer of Property Act, nor are we aware of any such authority.4. We think the position is not tenable, but that the lower Courts are quite right in the view they have taken of Section 82, when the District Judge says, "that the intention of the law is not that the lien of the mortgagee should be split, but simply to determine the liabilities of the purchasers inter se." Section 82 upon the face of it refers to contribution as between the various persons who may be liable with respect to the same debt. It seems to us that the lower Courts were quite right in allowing the plaintiff a decree for the whole sum claimed, making all the mortgaged properties liable for the satisfaction of that decree, and leaving it to any one of the defendants who might have to pay up more than his rateable share to recover with reference to Section 82 of the Transfer of Property Act from his co-debtors.5. This appeal is dismissed with costs.",
        }
        output: {
            "Case Type": "Civil",
            "Case Complexity": 4,
            "Filing Date": "04-March-1891",
            "Case age": "131 years",
            "Case Value":  "200 rupees"
            "Alternative Dispute Resolution (ADR) Opportunities": 2,
            "Number of Hearings": 1,
            "Party information": "Plaintiffs: Roghu Nath Pershad And Anr. Defendant: Harlal Sadhu And Ors.",
            "Number of Parties Involved": 3,
            "Legal Representation": true,
            "Sections": [
            "Section 82 of the Transfer of Property Act"
            ],
            "Legal Grounds": [
            "Plaintiff's rights of suit were unextinguished due to sub-sales by the mortgagor."
            ],
            "Statutory Compliance": false,
            "Urgency Factors": 0,
            "Appeals and Revision Petitions": false,
            "Geographic Factors": "Calcutta High Court",
            "State of Filing": "West Bengal",
            "Public interest": 1,
            "Volume of Evidence": 0,
            "Number of Legal Issues": 1,
            "Time Sensitivity": 0
            " Case Severity": 7
        }

        input: {
        "t": "M/S.Padmavati Enterprises vs The Deputy Commissioner Of ... on 22 December, 2021",
        "s": "Madras High Court",
        "id": 213626,
        "d": " W.P.No.30839 of 2015 IN THE HIGH COURT OF JUDICATURE AT MADRAS DATED : 22.12.2021 CORAM : THE HONOURABLE MR. JUSTICE S.M. SUBRAMANIAM W.P.No.30839 of 2015 M/s.Padmavati Enterprises, Represented by its Proprietor, Mr.Dhanraj, No.47/1, Varadhamuthiayappan Street, Chennai -600 001 ... Petitioner Vs. 1. The Deputy Commissioner of Customs (Group 1), Custom House, No.60, Rajaji Salai, Chennai-600 001 2. The Director, Food Safety and Standards Authority of India, Ministry of Health and Family Welfare, New Delhi. 3. Authorised Officer, Food Safety & Standards Authority of India, Ministry of Health and Family Welfare, C.1.D, Rajaji Bhawan, Besant Nagar, https://www.mhc.tn.gov.in/judis Page 1 of 11 W.P.No.30839 of 2015 Chennai-600 090. 4. Inspection Officer, Food Safety & Standards Authority of India, Ministry of Health and Family Welfare, C.1.D, Rajaji Bhawan, Besant Nagar, Chennai-600090. . ..Respondents Prayer : Writ Petition filed under Article 226 of the Constitution of India for issuance of a Writ of Mandamus directing the 3rd and 4th respondents herein to draw samples and certify petitioner's standard based on the specifications applicable under the Food Safety and Standards Act, 2006 and Regulations made thereof. For Petitioner : Mr.S.Murugappan For Respondents : Mr.SU.Srinivasan SPC for respondents. ORDER "Wholesale package means a package containing - 22.12.2021 kan/shr Internet : Yes Index : Yes / No Speaking order / Nonspeaking order To The relief sought for in the present Writ Petition is to direct the respondents 3 and 4 to draw samples and certify petitioner's standard based on the specifications applicable under the Food Safety and Standards Act, 2006. https://www.mhc.tn.gov.in/judis Page 2 of 11 W.P.No.30839 of 2015 2. The petitioner firm is an importer and trader in camphor and other chemicals. In the course of its business activities, the petitioner firm imported 4312 bags of sodium chloride from China. The net quantity imported is 107.8 tonnes in four containers with each bag of Sodium Chloride (Salt) weighing 25 kgs, net. The goods were supplied by M/s.China Salt Jitan Co.Ltd. The goods were accompanied by the suppliers' certificate of Analysis dated 02.07.2015 and also the certificate of Origin dated 02.07.2015. 3. Upon arrival of the goods at the Chennai Port, the petitioner firm filed a bill of entry with the first respondent as required by the Customs Department for due assessment and clearance of the consignment after completion of customs formalities. Since the goods imported were claimed as food grade sodium chloride, the matter was referred to the 3rd respondent for drawal of samples and giving their confirmation with regard to the food safety standards. https://www.mhc.tn.gov.in/judis Page 3 of 11 W.P.No.30839 of 2015 4. The 4th respondent came to inspect and draw the sample as per the directions of the third respondent. However, he did not draw any sample and instead forwarded a message online as per the practice of the 2nd respondent. The message received from the 4th respondent electronically was that “Best Before/ Use by date/ Date of expiry is not mentioned where it is required under clause 2.2.2:10 of FSS (Packaging and labelling Regulation, 2011)”. Thus, an objection was raised for drawing sample on the ground that the details regarding the manufacturing date or date of expiry in the labelling were not found. 5. Thus, the request of the petitioner for conducting the lab test was denied. Therefore, the petitioner is constrained to move the present Writ Petition. 6. The learned counsel for the petitioner drew the attention https://www.mhc.tn.gov.in/judis Page 4 of 11 W.P.No.30839 of 2015 of this Court with reference to the relevant rules, more specifically, as per the Food Safety and Standards (Packaging and Labelling) Regulation, 2011. Such a labelling in respect of wholesale quantity are exempted. When there is an exemption under the regulation in respect of whole sale packaging, there is no reason whatsoever to deny the benefit of lab test for the product imported by the petitioner. 7. The learned Central Government standing counsel reiterated by stating that in the absence of date of expiry and other details under the regulations, the authorities would not be in a position to draw sample, conduct test and send the same for testing in the lab. Relying on the counter affidavit, the learned Central Government standing counsel made a submission that in the present case such labelling and the particulars were missing and therefore the inspecting authorities refused to draw sample and there is no infirmity as such. https://www.mhc.tn.gov.in/judis Page 5 of 11 W.P.No.30839 of 2015 8. Para 1.2.1:(6) of the Regulation defines "Multipiece package means a package containing two or more individually packaged or labelled pieces of the same commodity of identical quantity, intended for retail either in individual pieces or packages as a whole" 9. Clause - 12 of the Regulation states Wholesale as follows: a) a number of retail packages, where such first mentioned package is intended for sale, distribution or delivery to an intermediary and is not intended for sale direct to a single consumer; or b) a commodity of food sold to an intermediary in bulk to enable such intermediary to sell, distribute or deliver such commodity of food https://www.mhc.tn.gov.in/judis Page 6 of 11 W.P.No.30839 of 2015 to the consumer in smaller quantities". 10. Clause 2.6 of the Regulation contemplates exemptions from labelling requirements- Clause 2.6.1(5) enumerates that "In case of wholesale packages the particulars regarding list of ingredients, Date of Manufacture/ packing, best before, expiry date labelling of irradiated food and, vegetarian logo/ non vegetarian log, may not be specified." 11. The learned counsel for the petitioner made a submission that the packages in the case of the petitioner is wholesale package. The commercial invoice issued by the exporting company indicates that the Sodium Chloride (food grade) in 25 kg/PE bag (Polyethylene bags). Therefore, the salt is packed in 25 kgs baggage and is a wholesale package. When it is a wholesale package, the exemption clause has to be applied and therefore, the stand taken by the Department is not in consonance with the https://www.mhc.tn.gov.in/judis Page 7 of 11 W.P.No.30839 of 2015 provisions of the Regulation of the year 2011. 12. This Court is of the considered opinion that it is not in dispute that the petitioner imported salt from China. Further, the invoice indicates that it is a wholesale package. As far as the wholesale package of salt is concerned, the exemption clause is applicable. Furthermore, it is brought to the notice of this Court that there is no expiry date for salt. These are all the facts which were not considered by the competent authorities. Thus, this Court is inclined to consider the Writ Petition. 13. Accordingly, the respondents 3 and 4 are directed to draw samples and certify petitioner's standard based on the specification applicable under the Food Safety and Standards Act, 2006. The said exercise is directed to be done within a period of 4 weeks from the date of receipt of a copy of this order. 14. With this direction, the Writ Petition stands allowed. https://www.mhc.tn.gov.in/judis Page 8 of 11 W.P.No.30839 of 2015 No costs. 1. The Deputy Commissioner of Customs (Group 1), Custom House, No.60, Rajaji Salai, Chennai-600 001 2. The Director, Food Safety and Standards Authority of India, Ministry of Health and Family Welfare, New Delhi. 3. Authorised Officer, https://www.mhc.tn.gov.in/judis Page 9 of 11 W.P.No.30839 of 2015 Food Safety & Standards Authority of India, Ministry of Health and Family Welfare, C.1.D, Rajaji Bhawan, Besant Nagar, Chennai-600 090. 4. Inspection Officer, Food Safety & Standards Authority of India, Ministry of Health and Family Welfare, C.1.D, Rajaji Bhawan, Besant Nagar, Chennai-600 090. . S.M. SUBRAMANIAM, J. kan/shr https://www.mhc.tn.gov.in/judis Page 10 of 11 W.P.No.30839 of 2015 W.P.No.30839 of 2015 22.12.2021 https://www.mhc.tn.gov.in/judis Page 11 of 11",
        }
        output: {
            "Case Type": "Civil",
            "Case Complexity": 3,
            "Filing Date": "22-Dec-2015",
            "Pending Duration": "5.5 years",
            "Case Value":  500000 rupees"
            "Alternative Dispute Resolution (ADR) Opportunities": 2,
            "Number of Hearings": 4,
            "Party information": ["Petitioner: M/s.Padmavati Enterprises", "Respondents: 1. The Deputy Commissioner of Customs (Group 1)", "2. The Director, Food Safety and Standards Authority of India", "3. Authorised Officer, Food Safety & Standards Authority of India", "4. Inspection Officer, Food Safety & Standards Authority of India"],
            "Number of Parties Involved": 4,
            "Legal Representation": "yes",
            "Sections": [],
            "Legal Grounds": ["Exemption in clause 2.6.1(5)", "Non expiry dates for salt"],
            "Statutory Compliance": true,
            "Urgency Factors": 1,
            "Appeals and Revision Petitions": false,
            "Geographic Factors": "Madras High Court",
            "State of Filing": "Tamil Nadu",
            "Public interest": 0,
            "Volume of Evidence": 1,
            "Number of Legal Issues": 2,
            "Time Sensitivity": 1,
            "Case Severity": 7
        } """

    return prompt + input
