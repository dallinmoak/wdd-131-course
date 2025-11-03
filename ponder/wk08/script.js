// i decided to define a class for Course, even though JS objects can have member functions, this is like more nicer, IMHO

class Course {
  constructor(code, courseName, logo, sections) {
    this.code = code;
    this.courseName = courseName;
    this.logo = logo;
    this.sections = sections;
  }

  enrollStudent(sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
}

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  logo: "images/js-logo.png",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
};

const bCourse = new Course(
  (code = aCourse["code"]),
  (courseName = aCourse["name"]),
  (logo = aCourse["logo"]),
  (sections = aCourse["sections"])
);

const sectionTemplate = (section) => {
  return `
  <tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
};

const renderSections = (sections) => {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
};

const fillHeader = (course) => {
  const { code, courseName, logo } = course;
  const logoEl = document.querySelector("#logo");
  logoEl.src = logo;
  logoEl.alt = courseName + " Logo";

  document.querySelector("#courseName").textContent = courseName;
  document.querySelector("#courseCode").textContent = code;
};

renderSections(bCourse.sections);

fillHeader(bCourse);

const handleEnroll = (course) => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  course.enrollStudent(sectionNum);
};

document.querySelector("#enrollStudent").addEventListener("click", () => {
  handleEnroll(bCourse);
});
