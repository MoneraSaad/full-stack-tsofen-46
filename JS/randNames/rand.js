const names = [
     "Lina",
   "Micky",
   "Abdalla",
   "Cizar",
  
   
   "Tima",
    "Mahmoud",
    "nimer",
   
    "jeries",
    "Saleh",
    "omri",
   
 
    "yousef",
    "marshood",
  "moran",
    "Maharn",
    "Nivin",
    'Rami',
    'Rawad',
    'Morad'
];

function randomNames(names, groupSize) {
    console.log("random "+names)
    try {
        const groups = [];
        const lengthNames=names.length / groupSize

        for (let j = 0; j < lengthNames; j++) {
            const newGroup = [];
            for (let i = 0; i < groupSize; i++) {
                const indexOfName = getRandomName(names);

                newGroup.push(names[indexOfName]);
                names.splice(indexOfName, 1);
            }

            groups.push(newGroup);
        }

        if (names.length > 0) {
            groups.push(names);
        }

        console.log(groups);
    } catch (err) {
        console.error(err);
    }
}

function getRandomName(names) {
    const arraySize = names.length;

    let indexOfName = Math.ceil(Math.random() * arraySize) - 1;

    return indexOfName;
}

randomNames(names, 3);
