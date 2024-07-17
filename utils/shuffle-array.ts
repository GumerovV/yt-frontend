export const shuffleArray = <T>(arr: T[]): T[] => {
	// Создаем копию массива, чтобы не изменять исходный массив
	const newArr = [...arr]
	for (let i = newArr.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1))
		const temp = newArr[randomIndex]
		newArr[randomIndex] = newArr[i]
		newArr[i] = temp
	}
	return newArr
}
