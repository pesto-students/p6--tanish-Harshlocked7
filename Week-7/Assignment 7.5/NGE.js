function NGE(arr, n)
{
    var next, i, j;
    for (i = 0; i < n; i++)
    {
        next = -1;
        for (j = i +1 ; j < n; j++)
        {
            if (arr[i] < arr[j])
            {
                next = arr[j];
                break;
            }
        }
        console.log(arr[i] + "--" + next);
        console.log("<br>");
    }
}

var arr = [11, 44, 21, 31]
var n = arr.length;
NGE(arr,n);
