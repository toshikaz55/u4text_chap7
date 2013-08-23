#pragma strict

static var goal : boolean;
goal = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter( col : Collider ) {

	if( col.tag == "Player" ) {
		goal = true;
	}

}