const bioData = {
   "Ayush Tiwari": {
      name: "Ayush TIwari",
      relation: "Son of Mr. Shailendra Tiwari",
      age: "19",
      education: "b.tech CSE in AI and ML, MBA IIM-A",
      hobbies: "Singing, Editing, etc",
      jobs: "Abhi padh reha",
      income: "Bhaut paisa hai",
      favorites: "Blue, 3, burger",
      best: "Khud ki tarif nahin karte ",
      bad: "Sleeps late",
      goals: "Start a company"
    },
    "Shreya Tiwari": {
      name: "Shreya Tiwari",
      relation: "Daughter of Mr. Shailendra Tiwari",
      age: "24",
      education: "MBBS",
      hobbies: "Shopping",
      jobs: "abhi padh rahi hain ",
      income: "-1 Cr",
      favorites: "Pink, 5, Chocolate",
      best: "kuch nahin ",
      bad: "Spends too much",
      goals: "achi shadi ho jaye"
    },
    "Aakansh Tiwari": {
      name: "Aakansh Tiwari",
    relation: "Son of Shailendra Tiwari",
    age: 15,
    education: "Narayana E-Techno 8th",
    hobbies: "khana khana",
    jobs: "sam ko marna",
    income: "Roti pe hain",
    favorite: {
        member: "Sam",
        color: "White (chawal ka)",
        number: 1
    },
    bestThing: "ladna",
    badHabit: "zadda kahate hain",
    futureGoals: "Btech"
}
  };
  
  function showBio(member) {
    const b = bioData[member];
    const html = `
      <h2>${b.name}</h2>
      <p><strong>Relation:</strong> ${b.relation}</p>
      <p><strong>Age:</strong> ${b.age}</p>
      <p><strong>Education:</strong> ${b.education}</p>
      <p><strong>Hobbies:</strong> ${b.hobbies}</p>
      <p><strong>Jobs Till Date:</strong> ${b.jobs}</p>
      <p><strong>Income:</strong> ${b.income}</p>
      <p><strong>Favorites:</strong> ${b.favorites}</p>
      <p><strong>Best Thing:</strong> ${b.best}</p>
      <p><strong>Bad Habit:</strong> ${b.bad}</p>
      <p><strong>Future Goals:</strong> ${b.goals}</p>
    `;
    document.getElementById('bioDetails').innerHTML = html;
    document.getElementById('bioModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('bioModal').style.display = 'none';
  }
  