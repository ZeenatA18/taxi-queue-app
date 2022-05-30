function TaxiQueue() {

	let _queueLength = 0
	let _taxiLength = 0

	function joinQueue() {
		_queueLength++
	}

	function leaveQueue() {
		if (_queueLength > 0) {
			_queueLength--
		}
	}

	function joinTaxiQueue() {
		_taxiLength++
	}

	function queueLength() {
		return _queueLength
	}

	function taxiQueueLength() {
		return _taxiLength
	}

	function taxiDepart() {
		
		if (_queueLength >= 12 && _taxiLength > 0) {
			_queueLength-=12
			_taxiLength--
			console.log(_queueLength)
		}
	
	}

	return {
		queueLength,
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}