#pragma strict

var targetPosition : Vector3;

function Start()
{
}

function Update()
{
	if( Input.GetMouseButtonDown(0) )
	{
		var ray = Camera.main.ScreenPointToRay( Input.mousePosition );
		var hitinfo : RaycastHit;
		if( Physics.Raycast( ray, hitinfo, 1000f ) )
		{
			targetPosition = hitinfo.point;
		}
	}
}

function Do(root : Transform,  camera : Transform, speed : float, direction : float)
{
    var rootDirection : Vector3 = root.forward;
    var horizontal : float = Input.GetAxis("Horizontal");
    var vertical : float  = Input.GetAxis("Vertical");
			
    var stickDirection : Vector3 = new Vector3(horizontal, 0, vertical);

    // Get camera rotation.    

    var CameraDirection : Vector3 = camera.forward;
    CameraDirection.y = 0.0f; // kill Y
    var referentialShift : Quaternion = Quaternion.FromToRotation(Vector3.forward, CameraDirection);

    // Convert joystick input in Worldspace coordinates
    var moveDirection : Vector3 = referentialShift * stickDirection;
			
	var speedVec : Vector2 =  new Vector2(horizontal, vertical);
	speed = Mathf.Clamp(speedVec.magnitude, 0, 1);      

    if (speed > 0.01f) // dead zone
    {
		var axis : Vector3 = Vector3.Cross(rootDirection, moveDirection);
		direction = Vector3.Angle(rootDirection, moveDirection) / 180.0f * (axis.y < 0 ? -1 : 1);
    }
    else
	{
        direction = 0.0f;
	}

}
