const bingo = require("./bingo");

describe("The bingo game", () => {
  it("given no boards, returns no winners", () => {
    expect(bingo()).toEqual([]);
  });

  it("given one board and no drawings, returns empty", () => {
    expect(
      bingo(`
      
       1  2  3  4  5 
       6  7  8  9 10 
      11 12 13 14 15
      16 17 18 19 20
      21 22 23 24 25
      `)
    ).toEqual([])
  });

  it("given two boards and winning drawings, returns the winning board", () => {
      const winners = bingo(`  1,5,4,8,2 
    
      1  2  8  4  5 
      6  7  8  9 10 
     11 12 13 14 15
     16 17 18 19 20
     21 22 23 24 25
 
     1  2  3  4  5 
     6  7  8  9 10 
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25
     `);

    expect(winners[0].index).toEqual(0);
    expect(winners[0].draw).toEqual("2");
  });

  it("given three boards and a winning row, returns the winning board", () => {
    const winners = bingo(`  23, 7, 1,5,19,20,  4,3,2 
    
    1  2  8  4  5 
    6  7  8  9 10 
   11 12 13 14 15
   16 17 18 19 20
   21 22 23 24 25

   1  2  12  4  5 
   6  7  8  9 10 
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25

   1  2  3  4  5 
   6  7  8  9 10 
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25
   `)
    expect(winners[0].index).toEqual(2);
    expect(winners[0].draw).toEqual("2");
  });

  it("given three boards and a winning column, returns the winning board", () => {
    const winners = bingo(`  3,  8, 13, 23,  18
    
    1  2  9  4  5 
    6  7  8  9 10 
   11 12 13 14 15
   16 17 18 19 20
   21 22 23 24 25

   1  2  12  4  5 
   6  7  8  9 10 
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25

   1  2  3  4  5 
   6  7  8  9 10 
  11 12 13 14 15
  16 17 18 19 20
  21 22 23 24 25
   `)
    expect(winners[0].index).toEqual(2);
    expect(winners[0].draw).toEqual("18");
    expect(winners[0].score).toEqual(4680);
  });

  it('matches the example case', () => {
    const winners = bingo(`7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

    22 13 17 11  0
     8  2 23  4 24
    21  9 14 16  7
     6 10  3 18  5
     1 12 20 15 19
    
     3 15  0  2 22
     9 18 13 17  5
    19  8  7 25 23
    20 11 10 24  4
    14 21 16 12  6
    
    14 21 17 24  4
    10 16 15  9 19
    18  8 23 26 20
    22 11 13  6  5
     2  0 12  3  7`);
    
    expect(winners[0].index).toEqual(2);
    expect(winners[0].score).toEqual(4512);
  });

});

// const input = `69,88,67,56,53,97,46,29,37,51,3,93,92,78,41,22,45,66,13,82,2,7,52,40,18,70,32,95,89,64,84,68,83,26,43,0,61,36,57,34,80,39,6,63,72,98,21,54,23,28,65,16,76,11,20,33,96,4,10,25,30,19,90,24,55,91,15,8,71,99,58,14,60,48,44,17,47,85,74,87,86,27,42,38,81,79,94,73,12,5,77,35,9,62,50,31,49,59,75,1

// 78 27 82 68 20
// 14  2 34 51  7
// 58 57 99 37 81
//  9  4  0 76 45
// 67 69 70 17 23

// 38 60 62 34 41
// 39 58 91 45 10
// 66 74 94 50 17
// 68 27 75 97 49
// 36 64  5 98 15

// 17 50 13 53 20
// 68 57 76 10 86
//  2 91 67 27 11
// 94 70 84 69 25
// 32 90 45 75 41

// 71 84 42 49 81
// 26 40 24 73 18
// 41 37 19 25 75
// 76 63 48 56 55
// 85 51 29 88 23

// 27 10 11 75 59
// 61 96 44 58 64
// 24 68 90 60 87
// 28 55 34 80  9
// 41 98 91 78 62

// 91 95 70 64 30
// 34 43 32 16 57
// 49 80 87 51 62
// 61 10  8 75 21
// 85 66  2 55 56

// 50  4 11 58 48
// 30 10 57 16 95
// 93 96 68 92 81
// 94 17 69 86 79
// 52 34 99  6 19

//  2 16 50 26 84
// 97 24 32 51  8
// 70  0  3 52  9
//  1 59 43 64 80
// 22 23 17 92 88

// 84  7 37 71 81
// 80 97 17 94  9
// 27 95 39 25  5
// 98 46 58 77  2
// 60  1 73 23 18

//  1 14 67 20 48
// 75 51 36 87 73
// 57 84 74 47 19
// 89  8 13 50 24
// 61 12 65 46 83

// 82 87  8  9 85
// 16 22 98 91 55
// 26 69 42 11 93
// 65 15  2 63 43
// 71 37 28 88 12

// 59  7 51  1 43
// 17 45 15 96 93
// 49 88 79 84 92
// 40 36 25 18 22
// 70 57 34 62  6

//  1 18  5 47 46
// 12 27 24 40  2
// 53 54 20 14 42
// 15 51 26 58  9
// 31 92 34 74  7

// 41 84 14 32  8
// 38  1 60 22 88
// 64 70 10 91 97
// 94 90 65 54 50
//  7 58 18 87 33

// 93 25 26 71 42
// 86 85 61 32 51
// 20 88 67 35 29
// 46 28 92  9 16
// 34 30 97 91 44

// 34 88 90 99 83
// 22 24  4 25 18
// 51 41 29 53 72
// 75 42 66 98 79
// 74  7  0 73 33

// 99 24 44 83 47
//  2 21 94 35  4
// 96 87 31  1 22
// 67  3 37 43 46
// 85 55 10  6 80

//  4 75 29 54 15
// 66 17 89 98 27
// 46  5 64  3 22
// 97 50  0 51 52
// 26 39 30 32 48

// 39 17 46 48 63
// 52 13 98 40 91
// 14 80 28 23 60
// 90 88 15 89 74
// 56  7  2 41 58

// 82 51  6  7 22
// 87  9 60 63 95
// 80  0  5  8 77
// 85  3 68 84 39
// 15 45 31 55 26

// 48 82 38 29 55
// 87 46 79 61 51
//  1 97 69 91 83
// 35 89 45 59 39
// 43 28 21 44 24

// 71 97 34 43 23
// 44 65 92 90 31
// 74 87 54 79 93
// 55 88 66 12 53
// 14 56 17 52 83

// 91 33 20 59 67
// 71 78 15 94 68
//  8 90 72 57 36
// 27 40 92  1 44
// 18 80  7 32 19

// 67 20 94 89 10
// 85 78 70 35  0
// 87 66 75 73 23
// 36  8 17 83 21
// 40 52 93 62 96

//  8 37 66 26 63
//  7 90 21 18 33
// 31 56 81 77 55
// 34 15 19 27 57
// 13 85  0 59  4

// 67 77 48 26  6
// 31 72 89 76 45
// 66  4  7 43 78
// 15 53 81 85 70
//  0 10 40 30 94

// 79 37  8 29 27
// 41 14 12 99 28
// 75 40 30 25 77
// 36 78 39 32 11
// 91 58 17 96 51

// 36  8 35 30 51
// 28 61  4 95 67
// 29 69 32 80 48
// 55 63 98 10 22
// 27 87 83 62 21

// 24 36 52 72 16
// 53  1  4 96 37
// 31  7 69 47 57
// 38 97  3 26 59
// 74 14 29 32 40

//  8 73 68 62 38
// 43 92 15 69 46
// 56 58 48 28 44
// 25 64 13 50 97
// 66 34 21 49 10

// 63 41 71 22 18
// 56 82 95 60 35
// 53 48 79 30 86
// 17 51 57 70 27
// 75 66 42 32 43

// 60 59 40 42 90
// 65 22 43  0 49
// 82 96 29 52 73
// 67 17 20 53 24
// 72  5 91 50 85

// 94 47  2 93 74
// 90 10 27 17  5
// 92 26 28 77 88
// 69 43 33 19 53
// 34 50 54 36 60

// 73 36 90 50 37
// 11 80 81 93 74
// 78 56 86  6 39
// 15 94  7 91 42
// 33  8 64 40 28

// 73 37 57 65  0
// 64 26 52 79 69
// 15 41  3  2  1
// 71 48  8 43 31
//  5 93 86 42 27

// 59 35 19 17 83
// 15 93 53  2  4
// 26 51 85 71 22
// 31 52 74 12 57
// 70 40 68 39 24

//  3  6 45 81 20
// 82 30 15 62 80
// 21 70 56 23 32
// 68 19 50 16 14
// 46 89 72 59 40

// 17 27 72 36 12
// 55 30  6 88 69
// 34 91 87 45 82
// 48 15 18 21  7
// 44  4 81 14 93

// 55 84 58 24 53
// 99 44 88 54 37
//  2 56 57 50 35
// 13 90 26 30 96
//  7 97 12 19 71

// 31 26 87 54 76
// 68 24 20 27 98
// 53 75 15 95  8
// 63  2 45 50  9
// 49 17 88 55  1

// 91 78 45 26 30
// 63 95 67 60 58
// 34 39 44 20 11
// 38 29 73 22 80
// 56 12 77 37  4

// 24 18 65 21  6
// 76 45 85  2 78
// 67 69 55 91 57
// 96 61 39 36 83
//  8 54 12 38 70

// 33 71 24 82 84
// 53 32 45  9 34
// 89 28 30 42 96
// 49 95 69 51 12
// 80 41 31 48 75

// 40 60  0 92 13
// 87  9 45 98 77
// 14 91 35  1 95
// 79 39 19 89 51
// 61 56  8 97 32

// 89 70  2 81 34
// 21 59 39 84 64
// 28 94 97 29 30
// 35 27 99 32 55
// 23 47 14 88  0

// 46 14 92 49 94
// 90 80  2 65 30
// 54 32 35 56 27
// 29 55 97 39 37
// 81 72 47 66 42

// 53  1  0 34 82
// 26 28 30 65 41
// 17  4 57 49 40
// 84 46 27 35 91
// 56 38 20 81 86

// 10 31 98 66 22
// 87 99 24 34 93
//  7 95 28 78 73
// 61 25 14  5  1
// 42 85 16 47 43

// 92 43  9 68 40
// 41 65 18 69 89
// 35 88 62 67 75
// 64  4 17 42 93
// 78 33 94 87 81

// 18 61 10 19 87
// 46 99 55  3 28
// 16 41 45 39 27
//  8 13 43 64 52
// 23 34 47 11 92

// 21 59 74 36 38
// 81 29 79 80 44
// 84 30 37 62 57
// 69 82 60 10 52
//  7 55 93 12  0

// 37 23 52  2 94
// 19 96  8 68 29
// 99 57 53  9 48
// 62 11 35 95 98
// 93 72 58 16 36

// 80 53 82 29 76
// 77 17 85 62 81
// 34 92 25 55 20
// 91 39 23 50 31
// 64 37 79 96  2

// 40  5 57 36 14
// 91 53 56 73 27
// 11 55 74  7  9
// 90 58 12 22 26
// 82 38 59 97 85

// 54 79 75  0 30
//  7 15 26 84 40
// 91 76 42  3 19
// 65 77 53 21 67
// 45 50  2 14 46

// 23 51 40 13 72
// 54 61 59 18 14
//  0 41  5 24 82
// 73 11 46 36 17
// 16 28 25 60  4

// 85 42 22 54 18
//  3 27 12 15 99
// 13 26 89 93 76
// 23 87 77 64 25
//  9 17 74 57 81

// 47 64 85 69 89
// 59 17  4 83 88
// 80 70 53  7 67
// 73 18 81 44 30
// 45 37 90 57  3

// 72 48 35 39 31
// 44 85 91 52 46
// 73 61 68 66 12
// 74 95 76 75 36
// 83 21 15  2 10

// 63 82 95 31 51
// 93  3 53 15 70
//  0 36 44 19  5
// 11 17 62 55 83
// 80 91  4 18 66

// 44  8 45 90 64
// 30 33  9 27 47
// 68 53 81 77 35
// 63  4 82 80 67
//  3 28 66 22 43

// 48 86 57 16  7
// 69 51 11  8 61
// 25 12 43 88 71
// 83 36 31 77  5
// 50 21  9 76 63

// 27 39  6 87 49
// 16 66  3 25 10
//  7 70  8 94 42
// 95 20 55  9 29
//  0 46 36 79 18

// 27 21 36 14 79
// 23 48 56 74 94
// 18 99 73 93 32
// 98 77 37 35 69
// 43 34 63 59  9

// 27 96 78 94 20
// 34  5 49 84 99
// 68 74 21 57  1
// 93 85 29 47 65
// 54 97 42 70 40

// 29 28 64 26 46
// 39 48 13 51  2
// 42 91 96 93 66
// 12 60 70  8 24
// 18 21 83 56 45

// 64 43 76 40 97
// 30 10 22 84 53
// 51 13 68 93 15
// 75 27 18 39 82
// 62 61 91 12 88

// 72  6 61 10 45
// 65 62 57  2 91
// 30 24 76 42 69
// 32 36 43 63 75
// 92 44 58 82 49

// 30 39 58 75 76
// 62 53 59 70 97
// 29 31 54 27 89
// 90 32 37 86  1
//  7 34 42 61 91

// 98 94 10 72 26
// 96 78 69 77 44
// 45  5 88 42 73
// 74 91 25 22 99
// 16 79 60 71 37

// 44 33 34 27 87
// 46 89 75 37  4
// 71 63 16 35 17
// 83 99 28 51 97
// 66 86 14 61  9

//  2 54  7 32 79
// 33 36 37 35 81
// 25 50 84 59 21
// 18 16 48 26 15
// 94 73 61 67 44

// 18 34 66 57 31
// 74 92 71 59 19
// 36 94 16 80 24
// 35 54 58 87 64
// 73 90 41 49 88

// 74  5 57 40 21
// 61 11 50 80 66
// 35 58 52 10 56
// 92 67 82 46 72
// 32 18 33 34 55

// 66 79 27 24 46
// 98  4 30 80 49
// 19 23 68 18 90
// 41 91 83 63 77
// 84 12  8 10 21

// 23 47 58  5 20
// 30 32 61  6 28
// 24 11  8 33 10
// 52 93 95  0 45
// 22 27  3 82 40

// 11 51 47 83 38
// 28 85  9 10 48
// 80 60 46 55 32
// 89 14 90 71 50
//  0 65 24 40 19

// 12  2 37 62 93
// 78 69 53 43 33
// 85 76 26 21 92
// 36 54 89 46 91
// 29 18 72  9 51

// 82 36 47 95 30
// 65  2 98 92 12
// 93 73 44 48  6
// 31 74 62 27 42
// 32 13 11 99 50

// 89 31 94  1 78
// 77 24 46 64 26
// 11 16 28 30 45
// 80 22  5  8 52
// 32 38 76 65 90

// 92 96 35 86 51
// 47 75 17 87 30
// 43 29 55 50 11
// 77 99 48 24 20
// 37  7 91 23  8

// 26 12 82 95 78
// 41 65 80 53 44
// 75 43 32 46 84
// 63 99 69 45 88
// 56 48 87 38 49

//  8 87 21 27 15
// 84 44 26 61 82
// 10 66 29 95 65
//  4 86 38 91 28
// 14 49 22 52 54

// 27 43 13 35 33
// 20 66 77 70 31
//  5 17 94 98 83
// 11 22 39 55 75
// 53 61 46 38 89

// 84 49 52 32 51
// 90 46 97 91 54
//  2 42 65 10 25
// 80 77 31 81 16
// 58 17 15 26 55

// 19 83 57 21 95
//  4 29 11 64  0
// 17 63 13 27 58
// 14 96 43 22 56
// 97 84 81 67 94

// 47 49  4 70 65
// 60 88  9 77  3
// 63 72 33 50 97
// 68 84 98 78 89
// 10 79 25 24 54

// 81 70 39 73 11
// 86 30 38 14 91
//  9 18 72 21 24
// 54 83 80 78 66
// 23 93 36 31 53

// 34 58 18 69 28
// 57 70 54 50 64
// 35 36  4 56 72
// 32 16 45 33 17
// 83 60 39 22 47

// 31 73 56 21 63
// 66 14 42 45 80
// 60 57 47 36 78
// 93 75 44 22 11
// 68 89 58 88 17

// 74 16 65 13 45
// 86 20  6 34 15
// 70 46 59 75 57
// 28 62 67 71 98
// 77 63 25 61 64

// 71 20 42 65 47
// 29 80 53 78 99
// 70 57 18 45 32
// 86 46 35 77 26
// 15 91 93 55 67

// 27 16 31 41 42
// 77 34 10 90 18
// 28 99 44 20 68
// 98 82  3 75 62
// 88 85 47 17 71

// 31 95 98 60 93
// 80 81 23 35 70
//  4 57 38 69 76
// 18  0 41 86 54
// 47 26 90 65 39

// 79 86 59 66 50
// 49 64 65 95  6
// 90 67 36 32 46
// 10 20 25 27  1
// 87 21 17 78 13

// 16  8 95 35 43
// 14  0 72 89 68
// 52 11 12 67 25
// 63 64 13 32 15
// 53 98 55 81 75

// 51 85 15 91 10
// 24 68 80 22  8
// 55 18 36 30 66
// 27 21 46 63 26
// 81  5 14  2 13

// 71 39 19 40 69
// 58 70 65 46 78
// 98 14 59 94 60
// 12 55 68 91  0
// 18 35 25 61 86

// 85 74 56 43 44
// 98 78 17 95  8
// 70 30 66 55 94
// 57 62 82 49 77
// 61 32 97 88 58

// 23  1 53 65 30
// 45 15  9 26 28
//  2 21 42 27 12
// 84 68 71 19 13
// 58 57 35 77 14`;

// console.log(bingo(input))