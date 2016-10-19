$(document).ready(function() {
  $("form#name").submit(function(event){
    event.preventDefault();
    var firstName = $("input#firstNameInput").val();
    var lastName = $("input#lastNameInput").val();
    var street = $("input#streetInput").val();
    var city = $("input#cityInput").val();
    var state = $("input#stateInput").val();
    var zip = $("input#zipInput").val();
    var gender = $("input:radio[name=gender]:checked").val();

    $("#firstNameOut").text(firstName);
    $("#lastNameOut").text(lastName);
    $("#streetOut").text(street);
    $("#cityOut").text(city);
    $("#stateOut").text(state);
    $("#zipOut").text(zip);
    $("#genderOut").text(gender);

    $("#receipt").show();
    $("#"+gender+"Img").show();
  });
});
