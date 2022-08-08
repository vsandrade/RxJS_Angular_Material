export interface Movie {
  name: string;
  category:
    | "Ação"
    | "Aventura"
    | "Animation"
    | "Terror"
    | "Biográfico"
    | "Comédia"
    | "Romance"
    | "Histórico"
    | "Drama"
    | "Fantasia"
    | "Ficção científica"
    | "Crime"
    | "Guerra"
    | "Mistério";
  rating: number;
  year: number;
  director: string;
}

export const DATA_MOVIES: Movie[] = [
  { name: "Mission Impossible", category: "Ação", rating: 7.1, year: 1996, director: "Brian De Palma"},
  { name: "Toy Story", category: "Animation", rating: 8.3, year: 1995, director: "John Lasseter"},
  { name: "Coco", category: "Animation", rating: 8.4, year: 2017, director: "Adrian Molina, Lee Unkrich"},
  { name: "The Iron Giant", category: "Animation", rating: 8.1, year: 1999, director: "Brad Bird"},
  { name: "Spider-Man - Into the spider-verse", category: "Animation", rating: 8.4, year: 2018, director: "Peter Ramsey, Bob Persichetti, Rodney Rothman"},
  { name: "Your Name", category: "Animation", rating: 8.4, year: 2016, director: "Makoto Shinkai"},
  { name: "How to Train Your Dragon", category: "Animation", rating: 8.1, year: 2010, director: "Chris Sanders, Dean DeBlois"},
  { name: "Lightyear", category: "Ação", rating: 5.7, year: 2022, director: "Angus MacLane"},
  { name: "The Girl with the Dragon Tattoo", category: "Ação", rating: 7.8, year: 2011, director: "David Fincher"},
  { name: "Avengers: Endgame", category: "Ação", rating: 8.4, year: 2019, director: "Anthony Russo, Joe Russo"},
  { name: "The Equalizer", category: "Ação", rating: 7.2, year: 2014, director: "Antoine Fuqua"},
  { name: "Man on Fire", category: "Ação", rating: 7.7, year: 2004, director: "Tony Scott"},
  { name: "Tudo em todo lugar ao mesmo tempo", category: "Ação", rating: 8.5, year: 2022, director: "Daniel Kwan, Daniel Scheinert"},
  { name: "Watchmen", category: "Ação", rating: 7.6, year: 2009, director: "Zack Snyder"},
  { name: "The Last Samurai", category: "Ação", rating: 7.8, year: 2003, director: "Edward Zwick"},
  { name: "Batman Begins", category: "Ação", rating: 8.2, year: 2005, director: "Christopher Nolan"},
  { name: "The Dark Knight", category: "Aventura", rating: 9, year: 2008, director: "Christopher Nolan"},
  { name: "Doctor Strange in the Multiverse of Madness", category: "Aventura", rating: 7, year: 2022, director: "Sam Raimi"},
  { name: "Devil's Advocate", category: "Terror", rating: 7.5, year: 2022, director: "Taylor Hackford"},
  { name: "The Cloverfield Paradox", category: "Terror", rating: 5.5, year: 2018, director: "Julius Onah"},
  { name: "From Dusk Till Dawn", category: "Terror", rating: 7.2, year: 1996, director: "Robert Rodriguez"},
  { name: "Glass", category: "Drama", rating: 6.6, year: 2019, director: "M. Night Shyamalan"},
  { name: "Rocketman", category: "Drama", rating: 7.3, year: 2019, director: "Dexter Fletcher"},
  { name: "Seven Pounds", category: "Drama", rating: 7.6, year: 2008, director: "Gabriele Muccino"},
  { name: "The Bucket List", category: "Drama", rating: 7.4, year: 2007, director: "Rob Reiner"},
  { name: "The Shawshank Redemption", category: "Drama", rating: 9.3, year: 1994, director: "Frank Darabont"},
  { name: "42", category: "Drama", rating: 7.5, year: 2013, director: "Brian Helgeland"},
  { name: "Gran Torino", category: "Drama", rating: 8.1, year: 2008, director: "Clint Eastwood"},
  { name: "Million Dollar Baby", category: "Drama", rating: 8.1, year: 2004, director: "Clint Eastwood"},
  { name: "Joker", category: "Drama", rating: 8.4, year: 2019, director: "Todd Phillips"},
  { name: "A Star is Born", category: "Romance", rating: 7.6, year: 2018, director: "Bradley Cooper"},
  { name: "Silver Linings Playbook", category: "Romance", rating: 7.7, year: 2012, director: "David O. Russel"},
  { name: "Titanic", category: "Romance", rating: 7.9, year: 1997, director: "James Cameron"},
  { name: "Good Will Hunting", category: "Romance", rating: 8.3, year: 1998, director: "Gus Van Sant"},
  { name: "Ready Player One", category: "Aventura", rating: 6.5, year: 2018, director: "Steven Spielberg"},
  { name: "Star Wars", category: "Aventura", rating: 6.5, year: 1983, director: "Richard Marquand"},
  { name: "Raiders of the Lost Ark", category: "Aventura", rating: 8.4, year: 1981, director: "Steven Spielberg"},
  { name: "Spider-Man: No Way Home ", category: "Aventura", rating: 8.3, year: 2021, director: "Jon Watts"},
  { name: "Interstellar", category: "Aventura", rating: 8.6, year: 2014, director: "Christopher Nolan"},
  { name: "The Lord of the Rings: The Fellowship of the Ring", category: "Aventura", rating: 8.8, year: 2001, director: "Peter Jackson"},
  { name: "The Lord of the Rings: The Return of the King", category: "Aventura", rating: 9.0, year: 2003, director: "Peter Jackson"},
  { name: "Inception", category: "Aventura", rating: 8.8, year: 2010, director: "Christopher Nolan"},
  { name: "Wild", category: "Biográfico", rating: 7.1, year: 2014, director: "Jean-Marc Vallée"},
  { name: "In the Heart of the Sea", category: "Biográfico", rating: 6.9, year: 2015, director: "Ron Howard"},
  { name: "King Richard", category: "Biográfico", rating: 7.5, year: 2021, director: "Reinaldo Marcus Green"},
  { name: "The Grand Budapest Hotel", category: "Comédia", rating: 8.1, year: 2014, director: "Wes Anderson"},
  { name: "The Hangover", category: "Comédia", rating: 7.7, year: 2009, director: "Todd Phillips"},
  { name: "Horrible Bosses", category: "Comédia", rating: 6.9, year: 2011, director: "Seth Gordon"},
  { name: "Just Go With It", category: "Comédia", rating: 6.4, year: 2011, director: "Dennis Dugan"},
  { name: "Grown Ups", category: "Comédia", rating: 5.9, year: 2010, director: "Dennis Dugan"},
  { name: "Hitch", category: "Comédia", rating: 6.6, year: 2005, director: "Andy Tennant"},
  { name: "Hidden Figures", category: "Histórico", rating: 7.8, year: 2016, director: "Theodore Melfi"},
  { name: "The Founder", category: "Histórico", rating: 7.2, year: 2016, director: "John Lee Hancock"},
  { name: "Race", category: "Histórico", rating: 7.1, year: 2016, director: "Stephen Hopkins"},
  { name: "The king's Speech", category: "Histórico", rating: 8, year: 2010, director: "Tom Hooper"},
  { name: "12 years a Slave", category: "Histórico", rating: 8.1, year: 2013, director: "Steve MacQueen"},
  { name: "Harry Potter and the Order of the Phoenix", category: "Fantasia", rating: 7.5, year: 2007, director: "David Yates"},
  { name: "Chronicles of Narnia: The Lion, the Witch and the Wardrobe", category: "Fantasia", rating: 6.9, year: 2005, director: "Andrew Adamson"},
  { name: "Oz The Great and Powerful", category: "Fantasia", rating: 6.3, year: 2013, director: "Sam Raimi"},
  { name: "Constantine", category: "Fantasia", rating: 7, year: 2005, director: "Francis Lawrence"},
  { name: "RoboCop", category: "Ficção científica", rating: 7.6, year: 1987, director: "Paul Verhoeven"},
  { name: "Matrix", category: "Ficção científica", rating: 8.7, year: 1999, director: "Lana Wachowski, Lilly Wachowski"},
  { name: "Edge Of Tomorrow", category: "Ficção científica", rating: 7.9, year: 2014, director: "Doug Liman"},
  { name: "I, Robot", category: "Ficção científica", rating: 7.1, year: 2004, director: "Alex Proyas"},
  { name: "War for the Planet of the Apes", category: "Ficção científica", rating: 7.4, year: 2017, director: "Matt Reeves"},
  { name: "Terminator 2: Judgment Day", category: "Ficção científica", rating: 8.6, year: 1991, director: "James Cameron"},
  { name: "Avatar", category: "Ficção científica", rating: 7.8, year: 2009, director: "James Cameron"},
  { name: "Aliens", category: "Ficção científica", rating: 8.4, year: 1986, director: "James Cameron"},
  { name: "Predestination", category: "Ficção científica", rating: 7.4, year: 2014, director: "Michael Spierig, Peter Spierig"},
  { name: "E.T. the Extra-Terrestrial", category: "Ficção científica", rating: 7.9, year: 1982, director: "Steven Spielberg"},
  { name: "Jurassic Park", category: "Ficção científica", rating: 8.2, year: 1993, director: "Steven Spielberg"},
  { name: "Gone Girl", category: "Mistério", rating: 8.1, year: 2014, director: "David Fincher"},
  { name: "Shutter Island", category: "Mistério", rating: 8.2, year: 2010, director: "Martin Scorsese"},
  { name: "Inferno", category: "Mistério", rating: 6.2, year: 2016, director: "Ron Howard"},
  { name: "In the Shadow of the Moon", category: "Mistério", rating: 6.2, year: 2019, director: "Jim Mickle"},
  { name: "Inside Man", category: "Crime", rating: 7.6, year: 2006, director: "Spike Lee"},
  { name: "Se7en", category: "Crime", rating: 8.6, year: 1995, director: "David Fincher"},
  { name: "21 Bridges", category: "Crime", rating: 6.6, year: 2019, director: "Brian Kirk"},
  { name: "Message from the King", category: "Crime", rating: 6.4, year: 2016, director: "Fabrice du Welz"},
  { name: "Pulp Fiction", category: "Crime", rating: 8.9, year: 1994, director: "Quentin Tarantino"},
  { name: "Kill Bill: Vol. 1", category: "Crime", rating: 8.2, year: 2003, director: "Quentin Tarantino"},
  { name: "Saving Private Ryan", category: "Guerra", rating: 8.6, year: 1998, director: "Steven Spielberg"},
  { name: "Braveheart", category: "Guerra", rating: 8.4, year: 1995, director: "Mel Gibson"},
  { name: "Fury", category: "Guerra", rating: 7.5, year: 2014, director: "David Ayer"},
  { name: "Inglourious Basterds", category: "Guerra", rating: 8.3, year: 2009, director: "Quentin Tarantino"},
  { name: "The Imitation Game", category: "Guerra", rating: 8, year: 2014, director: "Morten Tyldum"},
  { name: "American Sniper", category: "Guerra", rating: 7.3, year: 2014, director: "Clint Eastwood"},
]
