# restbest v0.1.4

restBest apiDoc Documentation

- [Authentication](#authentication)
	- [User Authentication](#user-authentication)
	
- [Message](#message)
	- [Create message](#create-message)
	- [Delete all messages](#delete-all-messages)
	- [Delete message](#delete-message)
	- [Retrieve message](#retrieve-message)
	- [Retrieve messages](#retrieve-messages)
	- [Update message](#update-message)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Authentication

## User Authentication



	POST /auth


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>User's username.</p>							|
| password			| String			|  <p>User's password.</p>							|
| token			| String			|  <p>admin access token.</p>							|

# Message

## Create message



	POST /messages


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Message's content.</p>							|

## Delete all messages



	DELETE /messages/all


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| admintoken			| String			|  <p>admin access token.</p>							|

## Delete message



	DELETE /messages/:id


## Retrieve message



	GET /messages/:id


## Retrieve messages



	GET /messages

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| x-total-count			| Number			|  <p>Messages count.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update message



	PUT /messages/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| content			| 			|  <p>Message's content.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token			| String			|  <p>Master token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token			| String			|  <p>User token.</p>							|
| admintoken			| String			|  <p>Admin token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token			| String			|  <p>User token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PATCH /users/:id/password


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token			| String			|  <p>User token.</p>							|
| admintoken			| String			|  <p>Admin token.</p>							|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PATCH /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| token			| String			|  <p>User token.</p>							|
| admintoken			| String			|  <p>User token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| userSettings			| Object			| **optional** <p>some usersettings values.</p>							|


