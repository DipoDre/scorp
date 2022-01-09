function merge_posts(listOfPosts) {

    let mergedPosts = [].concat(...listOfPosts)


    const _mergeArrays = (listOne, listTwo) => {
        const uniquePosts = []
    
        while (listOne.length && listTwo.length) {
            
            if (listOne[0].id === listTwo[0].id) listOne.shift()
            else {uniquePosts.push(listOne[0].created_at === listTwo[0].created_at ? listOne[0].id > listTwo[0].id ? listOne.shift() : listTwo.shift() : listOne[0].created_at > listTwo[0].created_at ? listOne.shift() : listTwo.shift())}
            
        }
    
    
        while (listOne.length) {
            uniquePosts.push(listOne.shift())
        }
        while (listTwo.length) {
            uniquePosts.push(listTwo.shift())
        }
    
        return uniquePosts
    }
    
    const mergeSort = (listOfPostToSort) => {
        if (listOfPostToSort.length < 2) return listOfPostToSort
        const middle = Math.floor(listOfPostToSort.length / 2)
        const leftHalf = listOfPostToSort.slice(0, middle)
        const rightHalf = listOfPostToSort.slice(middle, listOfPostToSort.length)
        const sortedLeftHalf = mergeSort(leftHalf)
        const sortedRightHalf = mergeSort(rightHalf)
        return _mergeArrays(sortedLeftHalf, sortedRightHalf)
    }
    
    return mergeSort(mergedPosts)
}



