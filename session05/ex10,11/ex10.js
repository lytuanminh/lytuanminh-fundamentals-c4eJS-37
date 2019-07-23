let isInside = ([x, y],[X, Y, W, H]) => {
    if (x >= X && x <= (X+W) && y >= Y && y <= (Y+H)){
        return true;
    }else{
        return false;
    }
}

