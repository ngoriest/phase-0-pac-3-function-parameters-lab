function introduction(kim) {
    return `Hi, my name is ${kim}.`;
}

function introductionWithLanguage(kim, JavaScript) {
    return `Hi, my name is ${kim} and I am learning to program in ${JavaScript}.`;
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

  introduction("John");  // Output: "Hi, my name is John."

    introductionWithLanguage("John", "JavaScript");  // Output: