ALTER DATABASE rhariyani CHARACTER SET utf8 COLLATE utf8_unicode_ci;

DROP TABLE IF EXISTS task;

CREATE TABLE task(
	taskId BINARY(20) NOT NULL,
	taskTitle VARCHAR(255) NOT NULL,
	taskStartDate DATETIME ,
	taskDueDate DATETIME NOT NULL,
	taskStatus VARCHAR(64),
	taskPriority VARCHAR(64),
	taskDescription varchar(256) NOT NULL,
		PRIMARY KEY(taskId)
);

/**
  2. sql query  for tweet


  . SELECT tweet.tweetContent, profile.profileAtHandle
  FROM tweet INNER JOIN 'like' ON tweet.tweetId = like.likeTweetId
  INNER JOIN profile ON like.likeProfileId = profile.profileId WHERE tweet.tweetId='';



 */