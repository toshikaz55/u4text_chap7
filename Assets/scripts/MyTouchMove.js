#pragma strict

var targetPosition : Vector3;

function Start () {

}

function Update () {

	if( Input.GetMouseButtonDown( 0 ) ) {
		var ray = Camera.main.ScreenPointToRay( Input.mousePosition );
		var hitInfo : RaycastHit;

		// cast a ray( length ---> distance ) against "all" collision in the scene
		if( Physics.Raycast( ray, hitInfo, 1000f ) ) {
			targetPosition = hitInfo.point;
		}
		
	}

}

function Do( root : Transform, camera : Transform, speed : float, direction : float ) {

	var rootDirection : Vector3 = root.forward;
	var horizontal : float = Input.GetAxis( "Horizontal" );
	var vertical : float = Input.GetAxis( "Vertical" );
	
	var stickDirection : Vector3 = new Vector3( horizontal, 0, vertical );
	
	// Get Camera Rotation
	var CameraDirection : Vector3 = camera.forward;
	CameraDirection.y = 0.0f;
	var referentialShift : Quaternion = Quaternion.FromToRotation( Vector3.forward, CameraDirection );

	// convert joystick input in Worldspace coordinates
	var moveDirection : Vector3 = referentialShift * stickDirection;
	
	var speedVec : Vector2 = new Vector2( horizontal, vertical );
	speed = Mathf.Clamp( speedVec.magnitude, 0, 1 );
	
	if( speed > 0.01f ) {
		// dead zone
		var axis : Vector3 = Vector3.Cross( rootDirection, moveDirection );
		direction = Vector3.Angle( rootDirection, moveDirection ) / 180.0f * ( axis.y < 0 ? -1 : 1 );
	} else {
		direction = 0.0f;
	}

}