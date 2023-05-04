function clacular(){
  setInterval(() => {
    let birthdate = new Date(document.getElementById('birthdate').value)

    let now = new Date()
    let ageInMs = now.getTime( - birthdate.getTime)

    let ageIns = ageInMs / 1000;
    let ageInMins = ageIns / 60;
    let ageInHrs = ageInMins / 60
    let ageInDays = ageInHrs / 24
    let ageInMonths = ageInDays / 30.4375
    let ageInYears = ageInMonths / 12

    document.querySelector('#')
    document.querySelector('#')
    document.querySelector('#')
    document.querySelector('#')
    document.querySelector('#')
    document.querySelector('#')
  })
}