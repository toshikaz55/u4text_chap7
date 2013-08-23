#pragma strict

function Start () {

}

function Update () {

	var animator = GetComponent( Animator );
	
	// Set parameter
	if( Input.GetKey( KeyCode.Space ) ) {
		animator.SetBool( "Jump", true );
	}

	// Get state
	var state : AnimatorStateInfo = animator.GetCurrentAnimatorStateInfo( 0 );
	
	if( state.IsName( "Locomotion.Jump" ) ) {
		animator.SetBool( "Jump", false );
	}

}