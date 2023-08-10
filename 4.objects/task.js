class Student { 
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.marks = [];
    }
  
    setSubject(subjectName) {
     this.subject = subjectName;
    }
  
    addMarks(...marksToAdd) {
      if(this.hasOwnProperty('marks')) {
       this.marks.push(...marksToAdd)
      }
    }
  
    getAverage() {
      if(this.hasOwnProperty('marks') === false || this.marks.length === 0) {
        return 0;
      }
     return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length
    }
  
    exclude(reason) {
      delete this.subject;
      delete this.marks;
      this.excluded = reason
    }
  }