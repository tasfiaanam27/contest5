interface Student {
  name: string;
  marks: number;
}

interface GradeBands {
  A: Student[];
  B: Student[];
  C: Student[];
  F: Student[];
}

function groupStudentsByGradeBand(students: Student[]): GradeBands {
  const result: GradeBands = {
    A: [],
    B: [],
    C: [],
    F: []
  };

  for (const student of students) {
    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }

  return result;
}