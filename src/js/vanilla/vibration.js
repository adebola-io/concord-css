const addVibration = () => {
        if (document.querySelector('.hover-vibrate')){
            document.querySelectorAll('.hover-vibrate').forEach((element)=>{
                element.animate(
                    [
                        {transform: 'translateX(-1%)'},
                        {transform: 'translateX(1%)'},
                        {transform: 'translateX(-1%)'},
                        {transform: 'translateX(1%)'},
                    ],
                    {duration: 450,
                    iterations: this.vibration
                    }
                )
            })
        }
    }