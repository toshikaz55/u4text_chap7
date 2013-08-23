#pragma strict

function Start () {

}

function Update () {

	var animator = GetComponent( Animator );
	
	// Set parameter
	if( Input.GetKey( KeyCode.Delete ) ) {
		animator.SetBool( "Death", true );
	}

	// Get state
	var state : AnimatorStateInfo = animator.GetCurrentAnimatorStateInfo( 0 );
	
	if( state.IsName( "Locomotion.Death" ) ) {
		animator.SetBool( "Death", false );
	}

}