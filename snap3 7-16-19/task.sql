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

  1. select * from tweet
  WHERE profileId= UNHEX("0536faef082b454e9d444cdbe7887d7a");
--------------------------------------------------------------------
  2.SELECT tweetId, tweetProfileId, tweetContent,
  tweetDate from tweet WHERE tweetContent LIKE "hello";
  --------------------------------------------------------
  3. SELECT tweet.tweetId, tweet.tweetProfileId, tweet.tweetContent, tweet.tweetDate, profile.profileAtHandle FROM `like` INNER JOIN tweet ON tweet.tweetId = like.likeTweetId
  INNER JOIN profile ON profile.profileId = like.likeProfileId WHERE like.likeTweetId = uuid;



 */