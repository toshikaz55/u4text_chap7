#pragma strict

static var time : float;

function Start () {

	time = 0.0;

}

function Update () {

	if( GoalArea.goal == false ) {
		time += Time.deltaTime;
	}

	var now : int = time;
	guiText.text = "<color=red>TIME: " + now.ToString() + "</color>";

}