#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( col : Collider ) {

	if( GoalArea.goal == false ) {
		if( col.tag == "Player" ) {
			Application.LoadLevel( Application.loadedLevel );
		}
	}

}