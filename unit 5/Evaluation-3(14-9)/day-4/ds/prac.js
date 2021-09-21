function number_of_teams(M) {
    var N1, N2, sqr;

    sqr = parseInt( Math.sqrt(1 + (8 * M)));

    N1 = (1 + sqr) / 2;

    N2 = (1 - sqr) / 2;
    if (N1 > 0)
        return N1;
    return N2;
}


    console.log(number_of_teams(N));
