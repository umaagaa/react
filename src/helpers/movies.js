const movies = [
    {
      "adult": false,
      "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 912649,
      "original_language": "en",
      "original_title": "Venom: The Last Dance",
      "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
      "popularity": 4674.885,
      "poster_path": "aa.jpg",
      "release_date": "2024-10-22",
      "title": "Venom: The Last Dance",
      "video": false,
      "vote_average": 6.513,
      "vote_count": 597
    },
    {
      "adult": false,
      "backdrop_path": "/18TSJF1WLA4CkymvVUcKDBwUJ9F.jpg",
      "genre_ids": [
        27,
        53,
        9648
      ],
      "id": 1034541,
      "original_language": "en",
      "original_title": "Terrifier 3",
      "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
      "popularity": 4571.712,
      "poster_path": "/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
      "release_date": "2024-10-09",
      "title": "Terrifier 3",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 792
    },
    {
      "adult": false,
      "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
      "genre_ids": [
        16,
        878,
        10751
      ],
      "id": 1184918,
      "original_language": "en",
      "original_title": "The Wild Robot",
      "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      "popularity": 3213.003,
      "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
      "release_date": "2024-09-12",
      "title": "The Wild Robot",
      "video": false,
      "vote_average": 8.525,
      "vote_count": 2609
    },
    {
      "adult": false,
      "backdrop_path": "/2fxnTXr8NwyTFkunkimJkGkhqfy.jpg",
      "genre_ids": [
        18,
        28,
        27
      ],
      "id": 1118031,
      "original_language": "es",
      "original_title": "Apocalipsis Z: el principio del fin",
      "overview": "When a kind of rabies that transforms people into aggressive creatures spreads across the planet, Manel isolates himself at home with his cat, relying on his wits to survive; but soon they must go out in search of food, by land and by sea, dodging many dangers.",
      "popularity": 2763.415,
      "poster_path": "/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
      "release_date": "2024-10-04",
      "title": "Apocalypse Z: The Beginning of the End",
      "video": false,
      "vote_average": 6.86,
      "vote_count": 292
    },
    {
      "adult": false,
      "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
      "genre_ids": [
        18,
        27,
        878
      ],
      "id": 933260,
      "original_language": "en",
      "original_title": "The Substance",
      "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      "popularity": 2324.291,
      "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
      "release_date": "2024-09-07",
      "title": "The Substance",
      "video": false,
      "vote_average": 7.286,
      "vote_count": 1652
    },
    {
      "adult": false,
      "backdrop_path": "/zViRwl3ySscZnbXZJ2Q9wq3SeUG.jpg",
      "genre_ids": [
        16,
        878,
        12,
        10751
      ],
      "id": 698687,
      "original_language": "en",
      "original_title": "Transformers One",
      "overview": "The untold origin story of Optimus Prime and Megatron, better known as sworn enemies, but once were friends bonded like brothers who changed the fate of Cybertron forever.",
      "popularity": 1897.195,
      "poster_path": "/iHPIBzrjJHbXeY9y7VVbEVNt7LW.jpg",
      "release_date": "2024-09-11",
      "title": "Transformers One",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 614
    },
    {
      "adult": false,
      "backdrop_path": "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
      "genre_ids": [
        28,
        35,
        878
      ],
      "id": 533535,
      "original_language": "en",
      "original_title": "Deadpool & Wolverine",
      "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
      "popularity": 1750.116,
      "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      "release_date": "2024-07-24",
      "title": "Deadpool & Wolverine",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 5142
    },
    {
      "adult": false,
      "backdrop_path": "/6vn6K9oX82i6E86ZiHVxqVEMQqP.jpg",
      "genre_ids": [
        878,
        27
      ],
      "id": 945961,
      "original_language": "en",
      "original_title": "Alien: Romulus",
      "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
      "popularity": 1540.596,
      "poster_path": "./helpers/aa.jpg",
      "release_date": "2024-08-13",
      "title": "Alien: Romulus",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 2199
    },
    {
      "adult": false,
      "backdrop_path": "/aa.jpg",
      "genre_ids": [
        28,
        27,
        53,
        878
      ],
      "id": 1051896,
      "original_language": "en",
      "original_title": "Arcadian",
      "overview": "In the near future, on a decimated Earth, Paul and his twin sons face terror at night when ferocious creatures awaken. When Paul is nearly killed, the boys come up with a plan for survival, using everything their father taught them to keep him alive.",
      "popularity": 1459.24,
      "poster_path": "/spWV1eRzlDxvai8LbxwAWR0Vst4.jpg",
      "release_date": "2024-04-12",
      "title": "Arcadian",
      "video": false,
      "vote_average": 6.012,
      "vote_count": 401
    },
    {
      "adult": false,
      "backdrop_path": "./helpers/aa.jpg",
      "genre_ids": [
        28,
        12,
        18,
        36,
        10749,
        53
      ],
      "id": 1084736,
      "original_language": "fr",
      "original_title": "Le Comte de Monte-Cristo",
      "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
      "popularity": 1435.473,
      "poster_path": "/zw4kV7npGtaqvUxvJE9IdqdFsNc.jpg",
      "release_date": "2024-06-28",
      "title": "The Count of Monte-Cristo",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 773
    },
    {
      "adult": false,
      "backdrop_path": "/rOmUuQEZfPXglwFs5ELLLUDKodL.jpg",
      "genre_ids": [
        35,
        28,
        14
      ],
      "id": 845781,
      "original_language": "en",
      "original_title": "Red One",
      "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous bounty hunter in a globe-trotting, action-packed mission to save Christmas.",
      "popularity": 1382.277,
      "poster_path": "/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
      "release_date": "2024-10-31",
      "title": "Red One",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 47
    },
    {
      "adult": false,
      "backdrop_path": "/uGmYqxh8flqkudioyFtD7IJSHxK.jpg",
      "genre_ids": [
        18,
        80,
        53
      ],
      "id": 889737,
      "original_language": "en",
      "original_title": "Joker: Folie à Deux",
      "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
      "popularity": 1368.406,
      "poster_path": "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
      "release_date": "2024-10-01",
      "title": "Joker: Folie à Deux",
      "video": false,
      "vote_average": 5.652,
      "vote_count": 1452
    },
    {
      "adult": false,
      "backdrop_path": "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
      "genre_ids": [
        878,
        28
      ],
      "id": 335983,
      "original_language": "en",
      "original_title": "Venom",
      "overview": "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
      "popularity": 1271.522,
      "poster_path": "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
      "release_date": "2018-09-28",
      "title": "Venom",
      "video": false,
      "vote_average": 6.835,
      "vote_count": 15916
    },
    {
      "adult": false,
      "backdrop_path": "/9msuazXGWAyl7vhxVFU7e7Bb5Ik.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 179387,
      "original_language": "tl",
      "original_title": "Heavenly Touch",
      "overview": "Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.",
      "popularity": 1126.94,
      "poster_path": "/ory8WuAqznTE7lfopTSymHpop2t.jpg",
      "release_date": "2009-05-12",
      "title": "Heavenly Touch",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 580489,
      "original_language": "en",
      "original_title": "Venom: Let There Be Carnage",
      "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      "popularity": 1076.805,
      "poster_path": "/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg",
      "release_date": "2021-09-30",
      "title": "Venom: Let There Be Carnage",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 10147
    },
    {
      "adult": false,
      "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
      "genre_ids": [
        16,
        10751,
        35,
        28
      ],
      "id": 519182,
      "original_language": "en",
      "original_title": "Despicable Me 4",
      "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
      "popularity": 1075.946,
      "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
      "release_date": "2024-06-20",
      "title": "Despicable Me 4",
      "video": false,
      "vote_average": 7.11,
      "vote_count": 2123
    },
    {
      "adult": false,
      "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        35,
        18
      ],
      "id": 1022789,
      "original_language": "en",
      "original_title": "Inside Out 2",
      "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      "popularity": 993.93,
      "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      "release_date": "2024-06-11",
      "title": "Inside Out 2",
      "video": false,
      "vote_average": 7.605,
      "vote_count": 4655
    },
    {
      "adult": false,
      "backdrop_path": "/csQSGH0QU8D3Ov5YLEYuHep8ihA.jpg",
      "genre_ids": [
        53,
        12,
        28,
        878
      ],
      "id": 1196470,
      "original_language": "fr",
      "original_title": "Survivre",
      "overview": "A couple celebrates their son’s birthday in the middle of the ocean on their boat. A violent storm hits and it brings up hungry creatures from the depths and they fight for their survival.",
      "popularity": 934.283,
      "poster_path": "/7fR3KxswtY8OHHZuOUB9td58CRX.jpg",
      "release_date": "2024-06-19",
      "title": "Survive",
      "video": false,
      "vote_average": 5.1,
      "vote_count": 39
    },
    {
      "adult": false,
      "backdrop_path": "/begseNUKhZcc05Bc1UggaX5GeES.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 976734,
      "original_language": "en",
      "original_title": "Canary Black",
      "overview": "Top level CIA agent Avery Graves is blackmailed by terrorists into betraying her own country to save her kidnapped husband. Cut off from her team, she turns to her underworld contacts to survive and help locate the coveted intelligence that the kidnappers want.",
      "popularity": 870.487,
      "poster_path": "/hhiR6uUbTYYvKoACkdAIQPS5c6f.jpg",
      "release_date": "2024-10-10",
      "title": "Canary Black",
      "video": false,
      "vote_average": 6.346,
      "vote_count": 205
    },
    {
      "adult": false,
      "backdrop_path": "/fBNnj5bQ5YhzPUzxIW1UvLVZepP.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 420634,
      "original_language": "en",
      "original_title": "Terrifier",
      "overview": "A maniacal clown named Art terrorizes three young women on Halloween night and everyone else who stands in his way.",
      "popularity": 844.56,
      "poster_path": "/sFaPj5UyIAsiRuIgVl60pCYUzmR.jpg",
      "release_date": "2018-01-25",
      "title": "Terrifier",
      "video": false,
      "vote_average": 6.389,
      "vote_count": 2392
    }
  ]

  export default movies;  