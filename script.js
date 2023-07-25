
/*function addNewEDUField() {
    let newNode = document.createElement('div');
    newNode.classList.add('form-group');

    let label = document.createElement('label');
    

    let textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter here';
    textarea.classList.add('form-control');
    

    newNode.appendChild(label);
    newNode.appendChild(textarea);

   
    let eduAddButtonOb = document.getElementById('eduAddButton');

    eduAddButtonOb.parentNode.insertBefore(newNode,eduAddButtonOb);
    

   
}

function addNewWEField() {
    let newNode = document.createElement('div');
    newNode.classList.add('form-group');

    let label = document.createElement('label');
    

    let textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter here';
    textarea.classList.add('form-control');

    newNode.appendChild(label);
    newNode.appendChild(textarea);

    let weAddButtonOb = document.getElementById('weAddButton');

    weAddButtonOb.parentNode.insertBefore(newNode, weAddButtonOb);
}*/
function generateCV() {
    // Get the values from the input fields
    //const name = document.getElementById("nameField").value;
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;

    let AddressField = document.getElementById("AddressField").value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML=AddressField;

    let emailField = document.getElementById("emailField").value;
    let emailT=document.getElementById("emailT");
    emailT.innerHTML=emailField;

    let phoneNoField = document.getElementById("phoneNoField").value;
    let phone_noT=document.getElementById("phone_noT");
    phone_noT.innerHTML=phoneNoField;

    let City_State_ZIP_Code_Field = document.getElementById("City_State_ZIP_Code_Field").value;
    let City_State_ZIP_CodeT=document.getElementById("City_State_ZIP_CodeT");
    City_State_ZIP_CodeT.innerHTML=City_State_ZIP_Code_Field;


    let objectiveField = document.getElementById("ObjectiveField").value;
    let objectiveT = document.getElementById("objectiveT");
    objectiveT.innerHTML = objectiveField;

  
      let educationField = document.getElementById("educationField").value;
      let workExperienceField = document.getElementById("experienceField").value;
      let keySkillsField = document.getElementById("kskillsField").value;
      let certificationsField = document.getElementById("certificatesField").value;
      let projectsField = document.getElementById("projectsField").value;
      let technicalSkillsField = document.getElementById("techskillsField").value;
      let languagesField = document.getElementById("lanField").value;
      let personalDetailsField = document.getElementById("perDetailField").value;
      let interestsField = document.getElementById("interestsField").value;
  
      // Update corresponding elements with the retrieved values
      document.getElementById("eduT").innerHTML = generatePattern(educationField);
      document.getElementById("weT").innerHTML = generatePattern(workExperienceField);
      document.getElementById("ksT").innerHTML = generatePattern(keySkillsField);
      document.getElementById("cerT").innerHTML = generatePattern(certificationsField);
      document.getElementById("proT").innerHTML = generatePattern(projectsField);
      document.getElementById("tecsT").innerHTML = generatePattern(technicalSkillsField);
      document.getElementById("lanT").innerHTML = generatePattern(languagesField);
      document.getElementById("pdT").innerHTML = generatePattern(personalDetailsField);
      document.getElementById("intT").innerHTML = generatePattern(interestsField);
  
   

      //Show the CV template
 document.getElementById("cv-form").style.display = "none";
 document.getElementById("generateButton").style.display = "none";
 document.getElementById("CV-template").style.display = "block";

  }
  
  // Helper function to generate the pattern for each field
  function generatePattern(fieldValue) {
      let fieldList = fieldValue.split('\n');
      let fieldPattern = '';
      fieldList.forEach(function(item) {
          fieldPattern += '<li>' + item + '</li>';
      });
      return '<ul>' + fieldPattern + '</ul>';
  }
  
  
    let workExperienceField = document.getElementById("workExperienceField").value;
    let weT = document.getElementById("weT");
    weT.innerHTML = workExperienceField;

    let keySkillsField = document.getElementById("keySkillsField").value;
    let ksT = document.getElementById("ksT");
    ksT.innerHTML = keySkillsField;

    let certificationsField = document.getElementById("certificationsField").value;
    let cerT = document.getElementById("cerT");
    cerT.innerHTML = certificationsField;

    let projectsField = document.getElementById("projectsField").value;
    let proT = document.getElementById("proT");
    proT.innerHTML = projectsField;

    let technicalSkillsField = document.getElementById("technicalSkillsField").value;
    let tecsT = document.getElementById("tecsT");
    tecsT.innerHTML = technicalSkillsField;

    let languagesField = document.getElementById("languagesField").value;
    let lanT = document.getElementById("lanT");
    lanT.innerHTML = languagesField;

    let personalDetailsField = document.getElementById("personalDetailsField").value;
    let pdT = document.getElementById("pdT");
    pdT.innerHTML = personalDetailsField;


   
 
  
   

    
   
function printCV(){
    window.print();
}

function updateLinkedIn() {
  const linkedInURL = document.getElementById("linkedInField").value;
  const linkedInElement = document.getElementById("linkedinLink");

  if (isValidURL(linkedInURL)) {
      linkedInElement.setAttribute("href", linkedInURL);
      linkedInElement.textContent = "LinkedIn";
  } else {
      linkedInElement.removeAttribute("href");
      linkedInElement.textContent = "Invalid URL";
  }
}

function isValidURL(url) {
  // Regular expression pattern to validate URL format
  const urlPattern = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i;
  return urlPattern.test(url);
}

 // Attach event listener to update the LinkedIn URL when input value changes
 const linkedInField = document.getElementById("linkedInField");
 linkedInField.addEventListener("input", updateLinkedIn);
   


 




