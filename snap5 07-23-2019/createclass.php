<?php
/**
 * create class and try to make it work
 * class will car
 */
 class car{
private $color;
private $model;


public function __construct($newColor ,$NewModel) {
	try {
		$this->setColor($newColor);
		$this->setModel($NewModel);
	}
	catch(\InvalidArgumentException | \RangeException | \Exception | \TypeError $exception) {
		$exceptionType = get_class($exception);
		throw(new $exceptionType($exception->getMessage(), 0, $exception));
	}
}

	/**
	 * acessor for color
	 * @return string
	 */
	public function getColor(): string {
		return ($this->color);
	}

	/**Mutator for color
	 * @param string $newColor
	 */

	public function setColor(string $newColor): void {
		$newColor = trim($newColor);
		$newColor = filter_var($newColor, FILTER_SANITIZE_STRING);
		if(strlen($newColor) > 32) {
			throw(new \RangeException(" large"));
		}
		// store the image  content
		$this->color = $newColor;
	}
	/**
	 * acessor for model
	 * @return string
	 */
	public function getModel(): string {
		return ($this->model);
	}
	/**Mutator for color
	 * @param string $newColor
	 */

	public function setModel(string $newModel): void {
		$newModel = trim($newModel);
		$newModel = filter_var($newModel, FILTER_SANITIZE_STRING);
		if(strlen($newModel) > 128) {
			throw(new \RangeException("  large"));
		}
		// store the image  content
		$this->model = $newModel;
	}


}
$honda= new car("silver", "Civic");
var_dump($honda);

?>

