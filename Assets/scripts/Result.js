#pragma strict

var style : GUIStyle;
var highScore : int;

function Start () {

	style.fontSize = 40;
	style.normal.textColor = Color.red;
	
	if( PlayerPrefs.HasKey( "HighScore" ) ) {
		highScore = PlayerPrefs.GetInt( "HighScore" );
	} else {
		highScore = 999;
	}

}

function Update () {

}

function OnGUI () {
	if( GoalArea.goal ) {
		var now : int = TimeText.time;
		
		if( highScore > now ) {
			PlayerPrefs.SetInt( "HighScore" , now );
			highScore = now;
		}

		GUI.Label( Rect( Screen.width / 2 - 150, 200,  200, 50 ), "GAME RESULT", style );
		GUI.Label( Rect( Screen.width / 2 - 150, 250,  200, 50 ), "HIGH SCORE " + highScore, style );

		GUI.Label( Rect( Screen.width / 2 - 150, 300,  200, 50 ), "NOW SCORE" + now, style );

		if( GUI.Button( Rect( Screen.width / 2 - 120, 350, 200, 30), "GAME RETRY" ) ) {
			Application.LoadLevel( Application.loadedLevel );
		}
	}
				
}