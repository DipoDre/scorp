function get_posts(userId, postIds) {

    let listOfPost = postIds.map(postId => {

        let post = null
        let query = `SELECT * FROM post WHERE id = ${postId}`
        mysqlConnection.query(query, (err, result) => {
            if (err) throw error

            if (!result.length > 0) {
                return
            }

            Object.keys(result).forEach(key => {
                post = result[key]
            })
        })
        
        if (post) {

            query = `SELECT * FROM like WHERE id = ${postId} AND userId = ${userId}`
            mysqlConnection.query(query, (err, result) => {
                if (err) throw error

                if (!result.length > 0) {
                    post.liked = false
                    return
                }

                post.liked = true
            })
        }
        

        return post
    })

    return listOfPost
}