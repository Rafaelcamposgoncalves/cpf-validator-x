# cpf-validator-x  
  
Library to validate CPF, Brazilian document


### Importing  
```const cpfValidatorX = require('cpf-validator-x');```  
  
### Parameters  
(cpf, error message)

| PARAMETER     | VALUE      | OBS                                                        |
|---------------|------------|------------------------------------------------------------|
| cpf           | cpf number | In case of error returns the CPF number                    |
| error message | message    | In case of error returns the message passed this parameter |
|                                                                                         |
  
  
### Usage examples  
  
#### In the first parameter 3 data types are accepted:  
```
cpfValidatorX.isCpf(33333333333);
```

or:
```
cpfValidatorX.isCpf('33333333333');
```

or:
```
cpfValidatorX.isCpf('333.333.333-33');
```

#### Example with 2 parameters

```
cpfValidatorX.isCpf('33333333333', 'CPF Inválido');
```

> **Note:**
>
> If the second parameter is omitted no message will be returned.  
  
### Return  
Returns a **JSON** object with up to 3 values, depending on error and number of parameters passed, Ex:  
  
#### With 1 parameter, and correct CPF:  
```
cpfValidatorX.isCpf(33333333333);
```
>return: {res: true}
  
#### With 1 parameter, and incorrect CPF:  
```
cpfValidatorX.isCpf(33333333333);
```
>return: {res: false, cpf: 33333333333}
  
#### With 2 parameters, and correct CPF:  
```
cpfValidatorX.isCpf(33333333333, "Error: cpf doesn't exist");
```
>return: {res: true}
  
#### With 2 parameters, and incorrect CPF:  
```
cpfValidatorX.isCpf(33333333333, "Error: cpf doesn't exist");
```
>return: {res: false, cpf: 33333333333, error: Error: cpf doesn't exist}