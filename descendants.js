var family = [
  {
    name: "Richard",
    children: [
      {
        name:"Brandon",
        children: []
      },{
        name: "Wylla",
        children: [
          {
            name: "Jon",
            children: []
          }
        ]
      },{
        name: "Eddard",
        children: [
          {
            name: "Robb",
            children: []
          },{
            name: "Sansa",
            children: []
          },{
            name: "Arya",
            children: []
          },{
            name: "Bran",
            children: []
          },{
            name: "Rickon",
            children: []
          }
        ]
      },{
        name: "Lyanna",
        children: []
      },{
        name: "Benjen",
        children: []
      }
    ]
  }
];

function findDescendants(family) {
  var children = 0;

  for (var i=0; i < family.children.length; i++) {
    console.log(family.children[i].name);
    children ++;
    children += findDescendants(family.children[i]);
  }
  return children;
}

var parent = family[0];

console.log(parent.name + " has " + findDescendants(parent) + " descendants!");
