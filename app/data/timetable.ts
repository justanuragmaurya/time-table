export interface ScheduleEntry {
  classType: string | null;
  courseCode: string | null;
  roomNumber: string | null;
}

export interface DailySchedule {
  Timing: string;
  Mon: ScheduleEntry | null;
  Tue: ScheduleEntry | null;
  Wed: ScheduleEntry | null;
  Thu: ScheduleEntry | null;
  Fri: ScheduleEntry | null;
  Sat: ScheduleEntry | null;
  Sun: ScheduleEntry | null;
}

export interface Schedule {
  Schedule: DailySchedule[];
}

export const data: Schedule = {
  "Schedule": [
    {
      "Timing": "09-10 AM",
      "Mon": {
        "classType": "Practical",
        "courseCode": "CSE325",
        "roomNumber": "33-305"
      },
      "Tue": null,
      "Wed": null,
      "Thu": {
        "classType": "Practical",
        "courseCode": "PEL132",
        "roomNumber": "33-603"
      },
      "Fri": null,
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "10-11 AM",
      "Mon": {
        "classType": "Practical",
        "courseCode": "CSE325",
        "roomNumber": "33-305"
      },
      "Tue": null,
      "Wed": null,
      "Thu": {
        "classType": "Practical",
        "courseCode": "PEL132",
        "roomNumber": "33-603"
      },
      "Fri": null,
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "11-12 AM",
      "Mon": {
        "classType": "Lecture",
        "courseCode": "CSE202",
        "roomNumber": "33-602"
      },
      "Tue": {
        "classType": "Lecture",
        "courseCode": "CSE209",
        "roomNumber": "33-601"
      },
      "Wed": null,
      "Thu": {
        "classType": "Lecture",
        "courseCode": "CSE306",
        "roomNumber": "33-603"
      },
      "Fri": null,
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "12-01 PM",
      "Mon": {
        "classType": "Lecture",
        "courseCode": "CSE202",
        "roomNumber": "33-602"
      },
      "Tue": {
        "classType": "Lecture",
        "courseCode": "CSE209",
        "roomNumber": "33-606"
      },
      "Wed": null,
      "Thu": {
        "classType": "Lecture",
        "courseCode": "CSE316",
        "roomNumber": "33-603"
      },
      "Fri": {
        "classType": "Lecture",
        "courseCode": "CSE205",
        "roomNumber": "33-603"
      },
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "01-02 PM",
      "Mon": {
        "classType": "Lecture",
        "courseCode": "PEL132",
        "roomNumber": "33-602"
      },
      "Tue": {
        "classType": "Lecture",
        "courseCode": "CSE316",
        "roomNumber": "33-603"
      },
      "Wed": null,
      "Thu": null,
      "Fri": {
        "classType": "Lecture",
        "courseCode": "CSE205",
        "roomNumber": "33-603"
      },
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "02-03 PM",
      "Mon": null,
      "Tue": null,
      "Wed": {
        "classType": "Lecture",
        "courseCode": "CSE316",
        "roomNumber": "33-603"
      },
      "Thu": {
        "classType": "Lecture",
        "courseCode": "CSE209",
        "roomNumber": "33-603"
      },
      "Fri": null,
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "03-04 PM",
      "Mon": {
        "classType": "Practical",
        "courseCode": "CSE307",
        "roomNumber": "33-305"
      },
      "Tue": {
        "classType": "Practical",
        "courseCode": "CSE205",
        "roomNumber": "33-603"
      },
      "Wed": {
        "classType": "Tutorial",
        "courseCode": "CSE209",
        "roomNumber": "33-603"
      },
      "Thu": {
        "classType": "Lecture",
        "courseCode": "CSE202",
        "roomNumber": "33-603"
      },
      "Fri": {
        "classType": "Practical",
        "courseCode": "CSE202",
        "roomNumber": "33-603"
      },
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    },
    {
      "Timing": "04-05 PM",
      "Mon": {
        "classType": "Practical",
        "courseCode": "CSE307",
        "roomNumber": "33-305"
      },
      "Tue": {
        "classType": "Practical",
        "courseCode": "CSE205",
        "roomNumber": "33-603"
      },
      "Wed": {
        "classType": "Lecture",
        "courseCode": "CSE205",
        "roomNumber": "33-603"
      },
      "Thu": {
        "classType": "Practical",
        "courseCode": "PEL132",
        "roomNumber": "33-603"
      },
      "Fri": {
        "classType": "Practical",
        "courseCode": "CSE202",
        "roomNumber": "33-603"
      },
      "Sat": {
        "classType": "Project Work/ Other Weekly Activities. Check Schedule Below",
        "courseCode": "",
        "roomNumber": ""
      },
      "Sun": null
    }
  ]
}

