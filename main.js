
  var lousLadies = [
        {
            "woman": {
                "name":"Angela",
                "sweetness":"1",
            }
        },
        {
            "woman": {
                "name":"Pamela",
                "sweetness":"2",
            }
        },
        {
            "woman": {
                "name":"Sandra",
                "sweetness":"3",
            }
        },
        {
            "woman": {
                "name":"Rita",
                "sweetness":"4",
            }
        },
        {
            "woman": {
                "name":"Monica",
                "sweetness":"5",
            }
        },
        {
            "woman": {
                "name":"Rita",
                "sweetness":"7",
            }
        },
        {
            "woman": {
                "name":"Tina",
                "sweetness":"8",
            }
        },
        {
            "woman": {
                "name":"Jessica",
                "sweetness":"11",
            }
        },
        {
            "woman": {
                "name":"Sandra",
                "sweetness":"9",
            }
        },
        {
            "woman": {
                "name":"Mary",
                "sweetness":"10",
            }
        },
        {
            "woman": {
                "name":"Erica",
                "sweetness":"6",
            }
        },
    ]
    let sweetestLady = [];
    for (var i = 0; i < lousLadies.length; i++) {
      if (lousLadies.woman.sweetness > 5) {
        sweetestLady.push(lousLadies.woman.sweetness)
      }
    }
    console.log(sweetestLady);
