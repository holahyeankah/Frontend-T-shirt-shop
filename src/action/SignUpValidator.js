import Validator from 'validatorjs';

class SignUpInputValidation{

    static InputValidation(userInput){
        const {name, email, password }= userInput;
        const validation = new Validator(
        {
       name,
       email,
       password

        },
        {
            name:'required|string|min:5|max:40',
            email:'required|string|email',
            password:'required|min:8|max:40|confirmed',
            password_confirmation:'required'
        },
        
        
        );

        const isValid=false;
        if(validation.passes()){
            return{
                isValid:true
            };
        }
        const errors= validation.errors.all();

        return{
            isValid,
            errors
        };
    }


}

export default SignUpInputValidation;