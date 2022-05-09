Results for the extraLargeArray
insert 934.420075 ms
append 13.484688 ms -->

Results for the largeArray
insert 7.864474 ms
append 906.292 μs

Results for the mediumArray
insert 167.262 μs
append 170.228 μs

Results for the smallArray
insert 48.735 μs
append 125.464 μs

Results for the tinyArray
insert 107.212 μs
append 196.988 μs


The double append is a better function to use because of its lower complexity. The insert array started off very high but ended up dropping almost 924ms and fluctuating afterwards. Same with the append array but vice versa. It starts off very small and picks up by alot with fluctuation. If i were to graph this, it would be a curved line starting high and dropping immensily only to come back up by a little and vice versa for the append array. It seems like unshift reassigns the index values of an already existing array element to make it work whereas push doesnt do that. It just adds a new value to the array. 

