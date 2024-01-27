#include <iostream>
#include <fstream>
#include <regex>
#include <nlohmann/json.hpp> // You may need to install the nlohmann/json library

using json = nlohmann::json;

std::string cleanString(const std::string& inputString) {
    // Remove newline characters and replace with a space
    std::string cleanedString = std::regex_replace(inputString, std::regex("\n"), " ");

    // Remove multiple spaces and replace with a single space
    cleanedString = std::regex_replace(cleanedString, std::regex("\\s+"), " ");

    // Remove other escape characters (e.g., \t, \r)
    cleanedString = std::regex_replace(cleanedString, std::regex("\\\\[ntr]"), "");

    // Remove multiple dashes and replace with a single dash
    cleanedString = std::regex_replace(cleanedString, std::regex("-{2,}"), "-");

    // Remove multiple equals and replace with a single equals
    cleanedString = std::regex_replace(cleanedString, std::regex("={2,}"), "=");

    // Trim extra spaces
    cleanedString = std::regex_replace(cleanedString, std::regex("^ +| +$|( ) +"), "$1");

    return cleanedString;
}

int main() {
    // Specify the input and output file names
    std::string inputFileName = "sample.json";
    std::cout << "Input file: " << inputFileName << std::endl;
    std::string outputFileName = "output.json";

    std::ifstream inputFile(inputFileName);
    std::ofstream outputFile(outputFileName);

    if (!inputFile.is_open()) {
        std::cerr << "Failed to open input file." << std::endl;
        return 1;
    }

    if (!outputFile.is_open()) {
        std::cerr << "Failed to open output file." << std::endl;
        return 1;
    }

    // Parse the JSON data from the input file
    json jsonData;
    std::cout << "Parsing JSON data..." << std::endl;
    inputFile >> jsonData;

    // Clean the "d" field
    jsonData["d"] = cleanString(jsonData["d"]);

    // Serialize the cleaned JSON data to the output file
    outputFile << jsonData.dump(4);

    // Close files
    inputFile.close();
    outputFile.close();

    std::cout << "Cleaning and writing completed. Output written to " << outputFileName << std::endl;

    return 0;
}
