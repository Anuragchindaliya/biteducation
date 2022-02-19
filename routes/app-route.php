<?php
header('Content-Type: application/json; charset=utf-8');


$allGetRoutes = [
	"/q2wapi",
	"/api/rooms",
	"/api/room"
];
$allPostRoutes = [
	"/api/createroom",
	"/api/updateroom"
];

function throwJson($result, $successJson, $errorJson)
{
	if ($result > 0) {
		echo json_encode(array_merge(
			[
				'status' => 'success'
			],
			$successJson
		));
	} else {
		echo json_encode(array_merge(
			[
				'status' => 'error'
			],
			$errorJson
		));
	}
}

function app_db()
{
	include_once ABSPATH . '/app-config.php';

	$db_conn = array(
		'host' => DB_HOST,
		'user' => DB_USER,
		'pass' => DB_PASSWORD,
		'database' => DB_NAME,
	);
	$db = new SimpleDBClass($db_conn);

	return $db;
}
$router->map('GET', '/', function () {
	$ajax_url = AJAX_URL;

	include  ABSPATH . '/views/index.php';
});
$router->map('GET', '/api/users', function () {
	$db = app_db();

	// $email =  $db->CleanDBData($_GET['email']);

	$q0 = $db->select("select * from  spark_students");

	if ($q0 > 0) {
		echo json_encode(array(
			'status' => 'success',
			'msg' => 'found records',
			'data' => $q0,
		));
	} else {
		echo json_encode(array(
			'status' => 'error',
			'msg' => 'no records found',
			'data' => $q0,
		));
	}
});




$router->map('GET', '/api/email', function () {
	$db = app_db();

	$email =  $db->CleanDBData($_GET['email']);

	$q0 = $db->select("select * from  t1 where email='$email' ");

	if ($q0 > 0) {
		echo json_encode(array(
			'status' => 'succes',
			'msg' => 'found records',
			'emails' => $q0,
		));
	} else {
		echo json_encode(array(
			'status' => 'error',
			'msg' => 'no records found',
			'emails' => $q0,
		));
	}
});


$router->map('GET', '/v1/api/[*:action]/t1', function ($id) {
	$db = app_db();

	$email =  $db->CleanDBData($id);

	$q0 = $db->select("select * from  t1 where email='$email' ");

	if ($q0 > 0) {
		echo json_encode(array(
			'status' => 'succes',
			'msg' => 'found records',
			'emails' => $q0,
		));
	} else {
		echo json_encode(array(
			'status' => 'error',
			'msg' => 'no records found',
			'emails' => $q0,
		));
	}
});


//get all rooms

if ($_SERVER['REQUEST_METHOD'] === "GET" && !in_array($_SERVER['REDIRECT_URL'], $allGetRoutes)) {

	//search certificates download
	$router->map('GET', '/api/certificate', function () {
		$db = app_db();

		$requiredFields = ["sr_no", "adm_no"];
		function validateParams($requiredFields)
		{
			// echo print_r($fields);
			foreach ($requiredFields as $key) {
				if (!isset($_GET[$key]) || is_null($_GET[$key])) {
					echo json_encode(array(
						'status' => 'failure',
						'msg' => "$key is missing in params",
						'data' => null,
					));
					die();
				}
			}
			return true;
		}

		if (validateParams($requiredFields)) {
			$sr_no =  $db->CleanDBData($_GET['sr_no']);
			$adm_no =  $db->CleanDBData($_GET['adm_no']);
			$result = $db->select("SELECT * FROM  certificates WHERE sr_no = '$sr_no' AND adm_no = '$adm_no'");
			$q0 = $result !== 0 ?  $result[0] : [];
			throwJson(
				$q0,
				[
					'msg' => ($result === 0 ? $result : count($result)) . ' records found',
					'data' => $q0,
				],
				[
					'msg' => 'No records found',
				]
			);
		}
	});




	$router->map('GET', '/api/rooms', function () {
		$db = app_db();

		// $email =  $db->CleanDBData($_GET['email']);

		$q0 = $db->select("SELECT * FROM  rooms");

		throwJson(
			$q0,
			[
				'msg' => count($q0) . ' records found',
				'data' => $q0,
			],
			[
				'msg' => 'No records found',
				'data' => $q0
			]
		);
	});
	//get room by id
	$router->map('GET', '/api/room', function () {
		$db = app_db();

		$room_id =  $db->CleanDBData($_GET['room_id']);
		if (!$room_id) {
			echo json_encode(array(
				'status' => 'failure',
				'msg' => 'room_id is missing in params',
			));
		} else {
			$result = $db->select("SELECT * FROM rooms WHERE room_id = '$room_id'");

			if ($result > 0) {
				echo json_encode(array(
					'status' => 'success',
					'msg' => count($result) . ' record(s) found',
					'data' => $result[0],
				));
			} else {
				echo json_encode(array(
					'status' => 'error',
					'msg' => 'no records found',
				));
			}
		}
	});

	//check login
	$router->map('GET', '/api/validate-token', function () {
		$db = app_db();
		$token = $db->CleanDBData($_GET["token"]);
		$result = $db->select("SELECT * FROM admin WHERE token = '$token'");
		if ($result) {
			echo json_encode(array(
				'status' => 'success',
				'msg' => 'Valid token',
			));
		} else {
			echo json_encode(array(
				'status' => 'failure',
				'msg' => 'Not valid token',
			));
		}
	});

	// download all certificates should be in post
	$router->map('GET', '/api/certificates', function () {
		$db = app_db();
		$token = $db->CleanDBData($_GET["token"]);
		$result = $db->select("SELECT * FROM admin WHERE token = '$token'");
		if ($result) {

			$q0 = $db->select("SELECT * FROM certificates ORDER BY id DESC");
			throwJson(
				$q0,
				[
					'msg' => count($q0) . ' records found',
					'data' => $q0,
				],
				[
					'msg' => 'No records found',
				]
			);
		} else {
			echo json_encode(array(
				'status' => 'failure',
				'msg' => 'Wrong token',
			));
		}
	});
} else if ($_SERVER['REQUEST_METHOD'] === "POST" && !in_array($_SERVER['REDIRECT_URL'], $allPostRoutes)) {




	$router->map('POST', '/api/logout', function () {
		$db = app_db();
		$token = $db->CleanDBData($_POST["token"]);
		$id = $db->CleanDBData($_POST["id"]);
		$updateToken = $db->Update("admin", ["token" => ""], ["token" => $token, "id" => $id]);
		if ($updateToken) {
			echo json_encode(array(
				'status' => 'success',
				'msg' => 'Logout successfully',
			));
		} else {
			echo json_encode(array(
				'status' => 'failure',
				'msg' => 'Error in logout',
			));
		}
	});
	//create room by id
	$router->map('POST', '/api/createroom', function () {
		$db = app_db();

		$room_id =  $db->CleanDBData($_POST['room_id']);
		if (!$room_id) {
			echo json_encode(array(
				'status' => 'error',
				'msg' => 'room_id is missing in params',
			));
		} else {
			$result = $db->select("SELECT * FROM rooms WHERE room_id = '$room_id'");
			if (gettype($result) === "array") {
				echo json_encode(array(
					'status' => 'already',
					'msg' => 'Room id is already exist',
					'data' => $result[0],
				));
			} else {
				// $result = $db->Insert("INSERT INTO rooms (room_id) VALUES('$room_id')");
				$result = $db->Insert("rooms", ["room_id" => $room_id]);

				if ($result > 0) {
					echo json_encode(array(
						'status' => 'success',
						'msg' => 'Room id Created',
						'data' => $result,
					));
				} else {
					echo json_encode(array(
						'status' => 'error',
						'msg' => 'Failed to create room id',
						'data' => $result,
					));
				}
			}
		}
	});

	//update room by id
	$router->map('POST', '/api/login', function () {
		$db = app_db();
		$requiredFields = ["username", "password"];



		function validateParams($requiredFields)
		{
			// echo print_r($fields);
			foreach ($requiredFields as $key) {
				if (!isset($_POST[$key]) || is_null($_POST[$key])) {
					echo json_encode(array(
						'status' => 'failure',
						'msg' => "$key is missing in params",
						'data' => null,
					));
					die();
				}
			}
			return true;
		}
		if (validateParams($requiredFields)) {
			$username =  $db->CleanDBData($_POST['username']);
			$password =  $db->CleanDBData($_POST['password']);
			$result = $db->select("SELECT * FROM admin WHERE username = '$username' AND password = '$password'");
			if ($result) {
				// echo "correct crendentials";
				$token =  md5(rand());
				$result[0]["token"] = $token;
				// $result = $db->select("INSERT INTO admin WHERE username = '$username' AND password = '$password'");
				$updateToken = $db->Update("admin", ["token" => $token], ["username" => $username, "password" => $password]);
				if ($updateToken) {
					echo json_encode(array(
						'status' => 'success',
						'msg' => "Login successfully",
						'data' => $result[0],
					));
					// echo "successfully login";
				} else {
					echo json_encode(array(
						'status' => 'failure',
						'msg' => "token not updated",
					));
				}
			} else {
				echo json_encode(array(
					'status' => 'failure',
					'msg' => "wrong credentials",
				));
			}
		}






		// if (!$room_id) {
		// 	echo json_encode(array(
		// 		'status' => 'failure',
		// 		'msg' => 'room_id is missing in params',
		// 		'data' => null,
		// 	));
		// } else {
		// 	$result = $db->select("SELECT * FROM rooms WHERE room_id = '$room_id'");

		// 	if (gettype($result) !== "array") {
		// 		echo json_encode(array(
		// 			'status' => 'error',
		// 			'msg' => 'Room id is not exist',
		// 			'data' => $result,
		// 		));
		// 	} else {
		// 		$content = $db->CleanDBData($_POST['content']);
		// 		$pass = $db->CleanDBData($_POST['pass']);
		// 		$last_modified = $_POST['last_modified'];
		// 		// echo $last_modified;
		// 		// die();
		// 		// $result = $db->Insert("INSERT INTO rooms (room_id) VALUES('$room_id')");
		// 		$result = $db->Update("rooms", ["content" => $content, "last_modified" => $last_modified, "pass" => $pass], ["room_id" => $room_id], []);

		// 		if ($result > 0) {
		// 			echo json_encode(array(
		// 				'status' => 'success',
		// 				'msg' => 'Room is updated',
		// 				'data' => $result,
		// 			));
		// 		} else {
		// 			echo json_encode(array(
		// 				'status' => 'error',
		// 				'msg' => 'Failed to update room',
		// 				'data' => $result,
		// 			));
		// 		}
		// 	}
		// }
	});

	//upload cetificates
	$router->map('POST', '/api/upload-certificate', function () {
		$db = app_db();

		$requiredFields = ["sr_no", "adm_no", "name", "father_name", "token"];
		function validateParams($requiredFields)
		{
			// echo print_r($fields);
			foreach ($requiredFields as $key) {
				if (!isset($_POST[$key]) || is_null($_POST[$key])) {
					echo json_encode(array(
						'status' => 'failure',
						'msg' => "$key is missing in params",
						'data' => null,
					));
					die();
				}
			}
			return true;
		}

		if (validateParams($requiredFields)) {
			$sr_no =  $db->CleanDBData($_POST['sr_no']);
			$adm_no =  $db->CleanDBData($_POST['adm_no']);
			$name =  $db->CleanDBData($_POST['name']);
			$father_name =  $db->CleanDBData($_POST['father_name']);



			$token = $db->CleanDBData($_POST["token"]);
			$valid_token = $db->select("SELECT * FROM admin WHERE token = '$token'");
			if ($valid_token) {
				if (isset($_FILES['cert_path']) && !is_null($_FILES['cert_path'])) {
					// $file_name = $db->CleanDBData($_FILES["cert_path"]["name"]);
					$file_name =  $adm_no . "_" . time() . ".pdf";
					if ($_FILES["cert_path"]["size"] < 5242880 && $_FILES["cert_path"]["type"] === "application/pdf") {
						if (move_uploaded_file($_FILES["cert_path"]["tmp_name"], "./uploads/certificates/$file_name")) {
							$cert_result = $db->Insert("certificates", ["sr_no" => $sr_no, "adm_no" => $adm_no, "name" => $name, "father_name" => $father_name, "cert_path" => $file_name]);
							if ($cert_result) {
								echo json_encode(array(
									'status' => 'success',
									'msg' => 'Data inserted',
								));
							} else {
								echo json_encode(array(
									'status' => 'failure',
									'msg' => "file is not uploaded",
								));
							}
						}
					} else {
						echo json_encode(array(
							'status' => 'failure',
							'msg' => 'File should be less than 5 mb and in pdf format',
						));
					}
				} else {
					echo json_encode(array(
						'status' => 'failure',
						'msg' => 'file is missing',
					));
				}
			} else {
				echo json_encode(array(
					'status' => 'failure',
					'msg' => 'Not valid token',
				));
			}
		}
	});



	//update room by id
	$router->map('POST', '/api/updateroom', function () {
		$db = app_db();

		$room_id =  $db->CleanDBData($_POST['room_id']);
		if (!$room_id) {
			echo json_encode(array(
				'status' => 'failure',
				'msg' => 'room_id is missing in params',
				'data' => null,
			));
		} else {
			$result = $db->select("SELECT * FROM rooms WHERE room_id = '$room_id'");

			if (gettype($result) !== "array") {
				echo json_encode(array(
					'status' => 'error',
					'msg' => 'Room id is not exist',
					'data' => $result,
				));
			} else {
				$content = $db->CleanDBData($_POST['content']);
				$pass = $db->CleanDBData($_POST['pass']);
				$last_modified = $_POST['last_modified'];
				// echo $last_modified;
				// die();
				// $result = $db->Insert("INSERT INTO rooms (room_id) VALUES('$room_id')");
				$result = $db->Update("rooms", ["content" => $content, "last_modified" => $last_modified, "pass" => $pass], ["room_id" => $room_id], []);

				if ($result > 0) {
					echo json_encode(array(
						'status' => 'success',
						'msg' => 'Room is updated',
						'data' => $result,
					));
				} else {
					echo json_encode(array(
						'status' => 'error',
						'msg' => 'Failed to update room',
						'data' => $result,
					));
				}
			}
		}
	});
} else {
	echo json_encode(array(
		'status' => 'error',
		'msg' => 'only get Method is allowed for this route',
	));
}
