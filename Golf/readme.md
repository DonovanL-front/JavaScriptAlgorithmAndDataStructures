Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	 return "Hole-in-one!"

<= par - 2	return "Eagle"

par - 1 return	"Birdie"

par	return "Par"

par + 1 return 	"Bogey"

par + 2	return "Double Bogey"

>= par + 3	return "Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

Tests
Passed:golfScore(4, 1) should return the string Hole-in-one!
Passed:golfScore(4, 2) should return the string Eagle
Passed:golfScore(5, 2) should return the string Eagle
Passed:golfScore(4, 3) should return the string Birdie
Passed:golfScore(4, 4) should return the string Par
Passed:golfScore(1, 1) should return the string Hole-in-one!
Passed:golfScore(5, 5) should return the string Par
Passed:golfScore(4, 5) should return the string Bogey
Passed:golfScore(4, 6) should return the string Double Bogey
Passed:golfScore(4, 7) should return the string Go Home!
Passed:golfScore(5, 9) should return the string Go Home!
