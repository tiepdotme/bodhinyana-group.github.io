	function hideOld() {
		if (!document.getElementsByTagName) return false;
	    var today = new Date();
	    var posts = document.getElementsByTagName("li");
	    for (var i = 0; i < posts.length; i++)
	        if (posts[i].id) {
	            var postDate = new Date(posts[i].id);
	            if (postDate < today) {
	                posts[i].hidden = true;
	            }
	        }
	}
