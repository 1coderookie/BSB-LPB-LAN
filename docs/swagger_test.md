-   [API Summary](#api-_)
-   [API Methods - Category](#api-Category)
-   [getCategories](#api-Category-getCategories)
-   [getCategory](#api-Category-getCategory)
-   [API Methods - Configuration](#api-Configuration)
-   [getConfiguration](#api-Configuration-getConfiguration)
-   [writeConfiguration](#api-Configuration-writeConfiguration)
-   [API Methods - General](#api-General)
-   [getApiVersion](#api-General-getApiVersion)
-   [getInfo](#api-General-getInfo)
-   [API Methods - Parameter](#api-Parameter)
-   [getResetValue](#api-Parameter-getResetValue)
-   [getResetValuePost](#api-Parameter-getResetValuePost)
-   [listParameterDefinitionsUsingGET](#api-Parameter-listParameterDefinitionsUsingGET)
-   [listParameterDefinitionsUsingPOST](#api-Parameter-listParameterDefinitionsUsingPOST)
-   [listParameters](#api-Parameter-listParameters)
-   [listParametersPost](#api-Parameter-listParametersPost)
-   [writeParameter](#api-Parameter-writeParameter)

BSB-LAN API
===========

API and SDK Documentation
-------------------------

Version: 2.0

* * * * *

BSB-LAN Json API Specification

Category
========

getCategories
=============

Get all categories

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JK=ALL
```

### Usage and SDK Samples

-   [Curl](#examples-Category-getCategories-0-curl)
-   [Java](#examples-Category-getCategories-0-java)
-   [Android](#examples-Category-getCategories-0-android)
-   [Obj-C](#examples-Category-getCategories-0-objc)
-   [JavaScript](#examples-Category-getCategories-0-javascript)
-   [C\#](#examples-Category-getCategories-0-csharp)
-   [PHP](#examples-Category-getCategories-0-php)
-   [Perl](#examples-Category-getCategories-0-perl)
-   [Python](#examples-Category-getCategories-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JK=ALL"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CategoryApi;

import java.io.File;
import java.util.*;

public class CategoryApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CategoryApi apiInstance = new CategoryApi();
        try {
            CategoryMap result = apiInstance.getCategories();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryApi#getCategories");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.CategoryApi;

public class CategoryApiExample {

    public static void main(String[] args) {
        CategoryApi apiInstance = new CategoryApi();
        try {
            CategoryMap result = apiInstance.getCategories();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryApi#getCategories");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];

CategoryApi *apiInstance = [[CategoryApi alloc] init];

// Get all categories
[apiInstance getCategoriesWithCompletionHandler: 
              ^(CategoryMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.CategoryApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCategories(callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getCategoriesExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CategoryApi();

            try
            {
                // Get all categories
                CategoryMap result = apiInstance.getCategories();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.getCategories: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCategoryApi();

try {
    $result = $api_instance->getCategories();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryApi->getCategories: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CategoryApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CategoryApi->new();

eval { 
    my $result = $api_instance->getCategories();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CategoryApi->getCategories: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CategoryApi()

try: 
    # Get all categories
    api_response = api_instance.get_categories()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CategoryApi->getCategories: %s\n" % e)
```

Parameters
----------

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getCategories-200-schema)

### Status: 401 - Unauthorized

* * * * *

getCategory
===========

Query a specific category

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JK={categoryId}
```

### Usage and SDK Samples

-   [Curl](#examples-Category-getCategory-0-curl)
-   [Java](#examples-Category-getCategory-0-java)
-   [Android](#examples-Category-getCategory-0-android)
-   [Obj-C](#examples-Category-getCategory-0-objc)
-   [JavaScript](#examples-Category-getCategory-0-javascript)
-   [C\#](#examples-Category-getCategory-0-csharp)
-   [PHP](#examples-Category-getCategory-0-php)
-   [Perl](#examples-Category-getCategory-0-perl)
-   [Python](#examples-Category-getCategory-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JK={categoryId}"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CategoryApi;

import java.io.File;
import java.util.*;

public class CategoryApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        CategoryApi apiInstance = new CategoryApi();
        Integer categoryId = 56; // Integer | ID of category
        try {
            ParameterDefinitionMap result = apiInstance.getCategory(categoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryApi#getCategory");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.CategoryApi;

public class CategoryApiExample {

    public static void main(String[] args) {
        CategoryApi apiInstance = new CategoryApi();
        Integer categoryId = 56; // Integer | ID of category
        try {
            ParameterDefinitionMap result = apiInstance.getCategory(categoryId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CategoryApi#getCategory");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
Integer *categoryId = 56; // ID of category

CategoryApi *apiInstance = [[CategoryApi alloc] init];

// Query a specific category
[apiInstance getCategoryWith:categoryId
              completionHandler: ^(ParameterDefinitionMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.CategoryApi()
var categoryId = 56; // {{Integer}} ID of category

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCategory(categoryId, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getCategoryExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new CategoryApi();
            var categoryId = 56;  // Integer | ID of category

            try
            {
                // Query a specific category
                ParameterDefinitionMap result = apiInstance.getCategory(categoryId);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CategoryApi.getCategory: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiCategoryApi();
$categoryId = 56; // Integer | ID of category

try {
    $result = $api_instance->getCategory($categoryId);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CategoryApi->getCategory: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CategoryApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::CategoryApi->new();
my $categoryId = 56; # Integer | ID of category

eval { 
    my $result = $api_instance->getCategory(categoryId => $categoryId);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CategoryApi->getCategory: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.CategoryApi()
categoryId = 56 # Integer | ID of category

try: 
    # Query a specific category
    api_response = api_instance.get_category(categoryId)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CategoryApi->getCategory: %s\n" % e)
```

Parameters
----------

Path parameters

<table>
<col width="50%" />
<col width="50%" />
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">categoryId*</td>
<td align="left">Integer (int32)
ID of category
Required</td>
</tr>
</tbody>
</table>

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getCategory-200-schema)

### Status: 401 - Unauthorized

* * * * *

Configuration
=============

getConfiguration
================

Get all BSB-LAN configuration values

For the usage of this function the module "JSONCONFIG" (see file BSB\_lan\_config.h) has to be compiled!

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JL
```

### Usage and SDK Samples

-   [Curl](#examples-Configuration-getConfiguration-0-curl)
-   [Java](#examples-Configuration-getConfiguration-0-java)
-   [Android](#examples-Configuration-getConfiguration-0-android)
-   [Obj-C](#examples-Configuration-getConfiguration-0-objc)
-   [JavaScript](#examples-Configuration-getConfiguration-0-javascript)
-   [C\#](#examples-Configuration-getConfiguration-0-csharp)
-   [PHP](#examples-Configuration-getConfiguration-0-php)
-   [Perl](#examples-Configuration-getConfiguration-0-perl)
-   [Python](#examples-Configuration-getConfiguration-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JL"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ConfigurationApi;

import java.io.File;
import java.util.*;

public class ConfigurationApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ConfigurationApi apiInstance = new ConfigurationApi();
        try {
            ConfigurationList result = apiInstance.getConfiguration();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigurationApi#getConfiguration");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ConfigurationApi;

public class ConfigurationApiExample {

    public static void main(String[] args) {
        ConfigurationApi apiInstance = new ConfigurationApi();
        try {
            ConfigurationList result = apiInstance.getConfiguration();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigurationApi#getConfiguration");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];

ConfigurationApi *apiInstance = [[ConfigurationApi alloc] init];

// Get all BSB-LAN configuration values
[apiInstance getConfigurationWithCompletionHandler: 
              ^(ConfigurationList output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ConfigurationApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getConfiguration(callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getConfigurationExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ConfigurationApi();

            try
            {
                // Get all BSB-LAN configuration values
                ConfigurationList result = apiInstance.getConfiguration();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ConfigurationApi.getConfiguration: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiConfigurationApi();

try {
    $result = $api_instance->getConfiguration();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConfigurationApi->getConfiguration: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ConfigurationApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ConfigurationApi->new();

eval { 
    my $result = $api_instance->getConfiguration();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ConfigurationApi->getConfiguration: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ConfigurationApi()

try: 
    # Get all BSB-LAN configuration values
    api_response = api_instance.get_configuration()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ConfigurationApi->getConfiguration: %s\n" % e)
```

Parameters
----------

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getConfiguration-200-schema)

### Status: 401 - Unauthorized

* * * * *

writeConfiguration
==================

Write new BSB-LAN configuration values

For the usage of this function the module "JSONCONFIG" (see file BSB\_lan\_config.h) has to be compiled!

``` {.prettyprint .language-html .prettyprinted data-type="post"}
/JW
```

### Usage and SDK Samples

-   [Curl](#examples-Configuration-writeConfiguration-0-curl)
-   [Java](#examples-Configuration-writeConfiguration-0-java)
-   [Android](#examples-Configuration-writeConfiguration-0-android)
-   [Obj-C](#examples-Configuration-writeConfiguration-0-objc)
-   [JavaScript](#examples-Configuration-writeConfiguration-0-javascript)
-   [C\#](#examples-Configuration-writeConfiguration-0-csharp)
-   [PHP](#examples-Configuration-writeConfiguration-0-php)
-   [Perl](#examples-Configuration-writeConfiguration-0-perl)
-   [Python](#examples-Configuration-writeConfiguration-0-python)

``` {.prettyprint}
curl -X POST\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/json"\
"http://bsb-lan/JW"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ConfigurationApi;

import java.io.File;
import java.util.*;

public class ConfigurationApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ConfigurationApi apiInstance = new ConfigurationApi();
        array[ConfigurationWrite] body = ; // array[ConfigurationWrite] | 
        try {
            ConfigurationWriteResultMap result = apiInstance.writeConfiguration(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigurationApi#writeConfiguration");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ConfigurationApi;

public class ConfigurationApiExample {

    public static void main(String[] args) {
        ConfigurationApi apiInstance = new ConfigurationApi();
        array[ConfigurationWrite] body = ; // array[ConfigurationWrite] | 
        try {
            ConfigurationWriteResultMap result = apiInstance.writeConfiguration(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigurationApi#writeConfiguration");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
array[ConfigurationWrite] *body = ; // 

ConfigurationApi *apiInstance = [[ConfigurationApi alloc] init];

// Write new BSB-LAN configuration values
[apiInstance writeConfigurationWith:body
              completionHandler: ^(ConfigurationWriteResultMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ConfigurationApi()
var body = ; // {{array[ConfigurationWrite]}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.writeConfiguration(body, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class writeConfigurationExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ConfigurationApi();
            var body = new array[ConfigurationWrite](); // array[ConfigurationWrite] | 

            try
            {
                // Write new BSB-LAN configuration values
                ConfigurationWriteResultMap result = apiInstance.writeConfiguration(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ConfigurationApi.writeConfiguration: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiConfigurationApi();
$body = ; // array[ConfigurationWrite] | 

try {
    $result = $api_instance->writeConfiguration($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ConfigurationApi->writeConfiguration: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ConfigurationApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ConfigurationApi->new();
my $body = [WWW::SwaggerClient::Object::array[ConfigurationWrite]->new()]; # array[ConfigurationWrite] | 

eval { 
    my $result = $api_instance->writeConfiguration(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ConfigurationApi->writeConfiguration: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ConfigurationApi()
body =  # array[ConfigurationWrite] | 

try: 
    # Write new BSB-LAN configuration values
    api_response = api_instance.write_configuration(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ConfigurationApi->writeConfiguration: %s\n" % e)
```

Parameters
----------

Body parameters

|Name|Description|
|:---|:----------|
|body \*||

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-writeConfiguration-200-schema)

### Status: 401 - Unauthorized

* * * * *

General
=======

getApiVersion
=============

Queries the JSON-API version

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JV
```

### Usage and SDK Samples

-   [Curl](#examples-General-getApiVersion-0-curl)
-   [Java](#examples-General-getApiVersion-0-java)
-   [Android](#examples-General-getApiVersion-0-android)
-   [Obj-C](#examples-General-getApiVersion-0-objc)
-   [JavaScript](#examples-General-getApiVersion-0-javascript)
-   [C\#](#examples-General-getApiVersion-0-csharp)
-   [PHP](#examples-General-getApiVersion-0-php)
-   [Perl](#examples-General-getApiVersion-0-perl)
-   [Python](#examples-General-getApiVersion-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JV"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.GeneralApi;

import java.io.File;
import java.util.*;

public class GeneralApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        GeneralApi apiInstance = new GeneralApi();
        try {
            ApiVersion result = apiInstance.getApiVersion();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GeneralApi#getApiVersion");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.GeneralApi;

public class GeneralApiExample {

    public static void main(String[] args) {
        GeneralApi apiInstance = new GeneralApi();
        try {
            ApiVersion result = apiInstance.getApiVersion();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GeneralApi#getApiVersion");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];

GeneralApi *apiInstance = [[GeneralApi alloc] init];

// Queries the JSON-API version
[apiInstance getApiVersionWithCompletionHandler: 
              ^(ApiVersion output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.GeneralApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getApiVersion(callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getApiVersionExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new GeneralApi();

            try
            {
                // Queries the JSON-API version
                ApiVersion result = apiInstance.getApiVersion();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GeneralApi.getApiVersion: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiGeneralApi();

try {
    $result = $api_instance->getApiVersion();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeneralApi->getApiVersion: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::GeneralApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::GeneralApi->new();

eval { 
    my $result = $api_instance->getApiVersion();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling GeneralApi->getApiVersion: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.GeneralApi()

try: 
    # Queries the JSON-API version
    api_response = api_instance.get_api_version()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GeneralApi->getApiVersion: %s\n" % e)
```

Parameters
----------

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getApiVersion-200-schema)

### Status: 401 - Unauthorized

* * * * *

getInfo
=======

Query configuration of BSB-LAN

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JI
```

### Usage and SDK Samples

-   [Curl](#examples-General-getInfo-0-curl)
-   [Java](#examples-General-getInfo-0-java)
-   [Android](#examples-General-getInfo-0-android)
-   [Obj-C](#examples-General-getInfo-0-objc)
-   [JavaScript](#examples-General-getInfo-0-javascript)
-   [C\#](#examples-General-getInfo-0-csharp)
-   [PHP](#examples-General-getInfo-0-php)
-   [Perl](#examples-General-getInfo-0-perl)
-   [Python](#examples-General-getInfo-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JI"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.GeneralApi;

import java.io.File;
import java.util.*;

public class GeneralApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        GeneralApi apiInstance = new GeneralApi();
        try {
            GeneralInfo result = apiInstance.getInfo();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GeneralApi#getInfo");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.GeneralApi;

public class GeneralApiExample {

    public static void main(String[] args) {
        GeneralApi apiInstance = new GeneralApi();
        try {
            GeneralInfo result = apiInstance.getInfo();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling GeneralApi#getInfo");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];

GeneralApi *apiInstance = [[GeneralApi alloc] init];

// Query configuration of BSB-LAN
[apiInstance getInfoWithCompletionHandler: 
              ^(GeneralInfo output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.GeneralApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getInfo(callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getInfoExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new GeneralApi();

            try
            {
                // Query configuration of BSB-LAN
                GeneralInfo result = apiInstance.getInfo();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling GeneralApi.getInfo: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiGeneralApi();

try {
    $result = $api_instance->getInfo();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GeneralApi->getInfo: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::GeneralApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::GeneralApi->new();

eval { 
    my $result = $api_instance->getInfo();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling GeneralApi->getInfo: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.GeneralApi()

try: 
    # Query configuration of BSB-LAN
    api_response = api_instance.get_info()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling GeneralApi->getInfo: %s\n" % e)
```

Parameters
----------

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getInfo-200-schema)

### Status: 401 - Unauthorized

* * * * *

Parameter
=========

getResetValue
=============

Queries the reset/default-value of parameter

Within the integrated operational unit of the heating system there arereset options available for some parameters. A reset is done by asking the system for the reset value and setting it afterwards (JSON: via/JS).

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JR={parameterIds}
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-getResetValue-0-curl)
-   [Java](#examples-Parameter-getResetValue-0-java)
-   [Android](#examples-Parameter-getResetValue-0-android)
-   [Obj-C](#examples-Parameter-getResetValue-0-objc)
-   [JavaScript](#examples-Parameter-getResetValue-0-javascript)
-   [C\#](#examples-Parameter-getResetValue-0-csharp)
-   [PHP](#examples-Parameter-getResetValue-0-php)
-   [Perl](#examples-Parameter-getResetValue-0-perl)
-   [Python](#examples-Parameter-getResetValue-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JR={parameterIds}"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ResetValueMap result = apiInstance.getResetValue(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#getResetValue");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ResetValueMap result = apiInstance.getResetValue(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#getResetValue");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *parameterIds = parameterIds_example; // One or more comma separated parameter ids

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// Queries the reset/default-value of parameter
[apiInstance getResetValueWith:parameterIds
              completionHandler: ^(ResetValueMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var parameterIds = parameterIds_example; // {{String}} One or more comma separated parameter ids

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getResetValue(parameterIds, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getResetValueExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var parameterIds = parameterIds_example;  // String | One or more comma separated parameter ids

            try
            {
                // Queries the reset/default-value of parameter
                ResetValueMap result = apiInstance.getResetValue(parameterIds);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.getResetValue: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$parameterIds = parameterIds_example; // String | One or more comma separated parameter ids

try {
    $result = $api_instance->getResetValue($parameterIds);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->getResetValue: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $parameterIds = parameterIds_example; # String | One or more comma separated parameter ids

eval { 
    my $result = $api_instance->getResetValue(parameterIds => $parameterIds);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->getResetValue: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
parameterIds = parameterIds_example # String | One or more comma separated parameter ids

try: 
    # Queries the reset/default-value of parameter
    api_response = api_instance.get_reset_value(parameterIds)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->getResetValue: %s\n" % e)
```

Parameters
----------

Path parameters

<table>
<col width="50%" />
<col width="50%" />
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">parameterIds*</td>
<td align="left">String
One or more comma separated parameter ids
Required</td>
</tr>
</tbody>
</table>

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getResetValue-200-schema)

### Status: 401 - Unauthorized

* * * * *

getResetValuePost
=================

Queries the reset/default-value of parameter

Within the integrated operational unit of the heating system there arereset options available for some parameters. A reset is done by asking the system for the reset value and setting it afterwards (JSON: via/JS).

``` {.prettyprint .language-html .prettyprinted data-type="post"}
/JR
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-getResetValuePost-0-curl)
-   [Java](#examples-Parameter-getResetValuePost-0-java)
-   [Android](#examples-Parameter-getResetValuePost-0-android)
-   [Obj-C](#examples-Parameter-getResetValuePost-0-objc)
-   [JavaScript](#examples-Parameter-getResetValuePost-0-javascript)
-   [C\#](#examples-Parameter-getResetValuePost-0-csharp)
-   [PHP](#examples-Parameter-getResetValuePost-0-php)
-   [Perl](#examples-Parameter-getResetValuePost-0-perl)
-   [Python](#examples-Parameter-getResetValuePost-0-python)

``` {.prettyprint}
curl -X POST\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/json"\
"http://bsb-lan/JR"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        array[ResetValueFilter] body = ; // array[ResetValueFilter] | 
        try {
            ResetValueMap result = apiInstance.getResetValuePost(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#getResetValuePost");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        array[ResetValueFilter] body = ; // array[ResetValueFilter] | 
        try {
            ResetValueMap result = apiInstance.getResetValuePost(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#getResetValuePost");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
array[ResetValueFilter] *body = ; // 

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// Queries the reset/default-value of parameter
[apiInstance getResetValuePostWith:body
              completionHandler: ^(ResetValueMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var body = ; // {{array[ResetValueFilter]}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getResetValuePost(body, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getResetValuePostExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var body = new array[ResetValueFilter](); // array[ResetValueFilter] | 

            try
            {
                // Queries the reset/default-value of parameter
                ResetValueMap result = apiInstance.getResetValuePost(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.getResetValuePost: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$body = ; // array[ResetValueFilter] | 

try {
    $result = $api_instance->getResetValuePost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->getResetValuePost: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $body = [WWW::SwaggerClient::Object::array[ResetValueFilter]->new()]; # array[ResetValueFilter] | 

eval { 
    my $result = $api_instance->getResetValuePost(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->getResetValuePost: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
body =  # array[ResetValueFilter] | 

try: 
    # Queries the reset/default-value of parameter
    api_response = api_instance.get_reset_value_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->getResetValuePost: %s\n" % e)
```

Parameters
----------

Body parameters

|Name|Description|
|:---|:----------|
|body \*||

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-getResetValuePost-200-schema)

### Status: 401 - Unauthorized

* * * * *

listParameterDefinitionsUsingGET
================================

List parameter definitions

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JC={parameterIds}
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-listParameterDefinitionsUsingGET-0-curl)
-   [Java](#examples-Parameter-listParameterDefinitionsUsingGET-0-java)
-   [Android](#examples-Parameter-listParameterDefinitionsUsingGET-0-android)
-   [Obj-C](#examples-Parameter-listParameterDefinitionsUsingGET-0-objc)
-   [JavaScript](#examples-Parameter-listParameterDefinitionsUsingGET-0-javascript)
-   [C\#](#examples-Parameter-listParameterDefinitionsUsingGET-0-csharp)
-   [PHP](#examples-Parameter-listParameterDefinitionsUsingGET-0-php)
-   [Perl](#examples-Parameter-listParameterDefinitionsUsingGET-0-perl)
-   [Python](#examples-Parameter-listParameterDefinitionsUsingGET-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JC={parameterIds}"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingGET(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameterDefinitionsUsingGET");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingGET(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameterDefinitionsUsingGET");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *parameterIds = parameterIds_example; // One or more comma separated parameter ids

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// List parameter definitions
[apiInstance listParameterDefinitionsUsingGETWith:parameterIds
              completionHandler: ^(ParameterDefinitionMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var parameterIds = parameterIds_example; // {{String}} One or more comma separated parameter ids

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listParameterDefinitionsUsingGET(parameterIds, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class listParameterDefinitionsUsingGETExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var parameterIds = parameterIds_example;  // String | One or more comma separated parameter ids

            try
            {
                // List parameter definitions
                ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingGET(parameterIds);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.listParameterDefinitionsUsingGET: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$parameterIds = parameterIds_example; // String | One or more comma separated parameter ids

try {
    $result = $api_instance->listParameterDefinitionsUsingGET($parameterIds);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->listParameterDefinitionsUsingGET: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $parameterIds = parameterIds_example; # String | One or more comma separated parameter ids

eval { 
    my $result = $api_instance->listParameterDefinitionsUsingGET(parameterIds => $parameterIds);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->listParameterDefinitionsUsingGET: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
parameterIds = parameterIds_example # String | One or more comma separated parameter ids

try: 
    # List parameter definitions
    api_response = api_instance.list_parameter_definitions_using_get(parameterIds)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->listParameterDefinitionsUsingGET: %s\n" % e)
```

Parameters
----------

Path parameters

<table>
<col width="50%" />
<col width="50%" />
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">parameterIds*</td>
<td align="left">String
One or more comma separated parameter ids
Required</td>
</tr>
</tbody>
</table>

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-listParameterDefinitionsUsingGET-200-schema)

### Status: 401 - Unauthorized

* * * * *

listParameterDefinitionsUsingPOST
=================================

List parameter definitions

``` {.prettyprint .language-html .prettyprinted data-type="post"}
/JC
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-listParameterDefinitionsUsingPOST-0-curl)
-   [Java](#examples-Parameter-listParameterDefinitionsUsingPOST-0-java)
-   [Android](#examples-Parameter-listParameterDefinitionsUsingPOST-0-android)
-   [Obj-C](#examples-Parameter-listParameterDefinitionsUsingPOST-0-objc)
-   [JavaScript](#examples-Parameter-listParameterDefinitionsUsingPOST-0-javascript)
-   [C\#](#examples-Parameter-listParameterDefinitionsUsingPOST-0-csharp)
-   [PHP](#examples-Parameter-listParameterDefinitionsUsingPOST-0-php)
-   [Perl](#examples-Parameter-listParameterDefinitionsUsingPOST-0-perl)
-   [Python](#examples-Parameter-listParameterDefinitionsUsingPOST-0-python)

``` {.prettyprint}
curl -X POST\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/json"\
"http://bsb-lan/JC"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        array[ParameterFilter] body = ; // array[ParameterFilter] | 
        try {
            ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingPOST(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameterDefinitionsUsingPOST");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        array[ParameterFilter] body = ; // array[ParameterFilter] | 
        try {
            ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingPOST(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameterDefinitionsUsingPOST");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
array[ParameterFilter] *body = ; // 

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// List parameter definitions
[apiInstance listParameterDefinitionsUsingPOSTWith:body
              completionHandler: ^(ParameterDefinitionMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var body = ; // {{array[ParameterFilter]}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listParameterDefinitionsUsingPOST(body, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class listParameterDefinitionsUsingPOSTExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var body = new array[ParameterFilter](); // array[ParameterFilter] | 

            try
            {
                // List parameter definitions
                ParameterDefinitionMap result = apiInstance.listParameterDefinitionsUsingPOST(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.listParameterDefinitionsUsingPOST: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$body = ; // array[ParameterFilter] | 

try {
    $result = $api_instance->listParameterDefinitionsUsingPOST($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->listParameterDefinitionsUsingPOST: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $body = [WWW::SwaggerClient::Object::array[ParameterFilter]->new()]; # array[ParameterFilter] | 

eval { 
    my $result = $api_instance->listParameterDefinitionsUsingPOST(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->listParameterDefinitionsUsingPOST: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
body =  # array[ParameterFilter] | 

try: 
    # List parameter definitions
    api_response = api_instance.list_parameter_definitions_using_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->listParameterDefinitionsUsingPOST: %s\n" % e)
```

Parameters
----------

Body parameters

|Name|Description|
|:---|:----------|
|body \*||

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-listParameterDefinitionsUsingPOST-200-schema)

### Status: 401 - Unauthorized

* * * * *

listParameters
==============

List parameters

``` {.prettyprint .language-html .prettyprinted data-type="get"}
/JQ={parameterIds}
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-listParameters-0-curl)
-   [Java](#examples-Parameter-listParameters-0-java)
-   [Android](#examples-Parameter-listParameters-0-android)
-   [Obj-C](#examples-Parameter-listParameters-0-objc)
-   [JavaScript](#examples-Parameter-listParameters-0-javascript)
-   [C\#](#examples-Parameter-listParameters-0-csharp)
-   [PHP](#examples-Parameter-listParameters-0-php)
-   [Perl](#examples-Parameter-listParameters-0-perl)
-   [Python](#examples-Parameter-listParameters-0-python)

``` {.prettyprint}
curl -X GET\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
"http://bsb-lan/JQ={parameterIds}"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ParameterMap result = apiInstance.listParameters(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameters");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        String parameterIds = parameterIds_example; // String | One or more comma separated parameter ids
        try {
            ParameterMap result = apiInstance.listParameters(parameterIds);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParameters");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
String *parameterIds = parameterIds_example; // One or more comma separated parameter ids

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// List parameters
[apiInstance listParametersWith:parameterIds
              completionHandler: ^(ParameterMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var parameterIds = parameterIds_example; // {{String}} One or more comma separated parameter ids

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listParameters(parameterIds, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class listParametersExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var parameterIds = parameterIds_example;  // String | One or more comma separated parameter ids

            try
            {
                // List parameters
                ParameterMap result = apiInstance.listParameters(parameterIds);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.listParameters: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$parameterIds = parameterIds_example; // String | One or more comma separated parameter ids

try {
    $result = $api_instance->listParameters($parameterIds);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->listParameters: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $parameterIds = parameterIds_example; # String | One or more comma separated parameter ids

eval { 
    my $result = $api_instance->listParameters(parameterIds => $parameterIds);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->listParameters: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
parameterIds = parameterIds_example # String | One or more comma separated parameter ids

try: 
    # List parameters
    api_response = api_instance.list_parameters(parameterIds)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->listParameters: %s\n" % e)
```

Parameters
----------

Path parameters

<table>
<col width="50%" />
<col width="50%" />
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">parameterIds*</td>
<td align="left">String
One or more comma separated parameter ids
Required</td>
</tr>
</tbody>
</table>

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-listParameters-200-schema)

### Status: 401 - Unauthorized

* * * * *

listParametersPost
==================

List parameters

``` {.prettyprint .language-html .prettyprinted data-type="post"}
/JQ
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-listParametersPost-0-curl)
-   [Java](#examples-Parameter-listParametersPost-0-java)
-   [Android](#examples-Parameter-listParametersPost-0-android)
-   [Obj-C](#examples-Parameter-listParametersPost-0-objc)
-   [JavaScript](#examples-Parameter-listParametersPost-0-javascript)
-   [C\#](#examples-Parameter-listParametersPost-0-csharp)
-   [PHP](#examples-Parameter-listParametersPost-0-php)
-   [Perl](#examples-Parameter-listParametersPost-0-perl)
-   [Python](#examples-Parameter-listParametersPost-0-python)

``` {.prettyprint}
curl -X POST\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/json"\
"http://bsb-lan/JQ"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        array[ParameterFilter] body = ; // array[ParameterFilter] | 
        try {
            ParameterMap result = apiInstance.listParametersPost(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParametersPost");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        array[ParameterFilter] body = ; // array[ParameterFilter] | 
        try {
            ParameterMap result = apiInstance.listParametersPost(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#listParametersPost");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
array[ParameterFilter] *body = ; // 

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// List parameters
[apiInstance listParametersPostWith:body
              completionHandler: ^(ParameterMap output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var body = ; // {{array[ParameterFilter]}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listParametersPost(body, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class listParametersPostExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var body = new array[ParameterFilter](); // array[ParameterFilter] | 

            try
            {
                // List parameters
                ParameterMap result = apiInstance.listParametersPost(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.listParametersPost: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$body = ; // array[ParameterFilter] | 

try {
    $result = $api_instance->listParametersPost($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->listParametersPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $body = [WWW::SwaggerClient::Object::array[ParameterFilter]->new()]; # array[ParameterFilter] | 

eval { 
    my $result = $api_instance->listParametersPost(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->listParametersPost: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
body =  # array[ParameterFilter] | 

try: 
    # List parameters
    api_response = api_instance.list_parameters_post(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->listParametersPost: %s\n" % e)
```

Parameters
----------

Body parameters

|Name|Description|
|:---|:----------|
|body \*||

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-listParametersPost-200-schema)

### Status: 401 - Unauthorized

* * * * *

writeParameter
==============

Write parameter value

``` {.prettyprint .language-html .prettyprinted data-type="post"}
/JS
```

### Usage and SDK Samples

-   [Curl](#examples-Parameter-writeParameter-0-curl)
-   [Java](#examples-Parameter-writeParameter-0-java)
-   [Android](#examples-Parameter-writeParameter-0-android)
-   [Obj-C](#examples-Parameter-writeParameter-0-objc)
-   [JavaScript](#examples-Parameter-writeParameter-0-javascript)
-   [C\#](#examples-Parameter-writeParameter-0-csharp)
-   [PHP](#examples-Parameter-writeParameter-0-php)
-   [Perl](#examples-Parameter-writeParameter-0-perl)
-   [Python](#examples-Parameter-writeParameter-0-python)

``` {.prettyprint}
curl -X POST\
 -H "Authorization: Basic [[basicHash]]"\
-H "Accept: application/json"\
-H "Content-Type: application/json"\
"http://bsb-lan/JS"
```

``` {.prettyprint}
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.ParameterApi;

import java.io.File;
import java.util.*;

public class ParameterApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        ParameterApi apiInstance = new ParameterApi();
        ParameterWrite body = ; // ParameterWrite | 
        try {
            ParameterWriteResult result = apiInstance.writeParameter(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#writeParameter");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
import io.swagger.client.api.ParameterApi;

public class ParameterApiExample {

    public static void main(String[] args) {
        ParameterApi apiInstance = new ParameterApi();
        ParameterWrite body = ; // ParameterWrite | 
        try {
            ParameterWriteResult result = apiInstance.writeParameter(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ParameterApi#writeParameter");
            e.printStackTrace();
        }
    }
}
```

``` {.prettyprint}
Configuration *apiConfig = [Configuration sharedConfig];
// Configure HTTP basic authorization (authentication scheme: basicAuth)
[apiConfig setUsername:@"YOUR_USERNAME"];
[apiConfig setPassword:@"YOUR_PASSWORD"];
ParameterWrite *body = ; // 

ParameterApi *apiInstance = [[ParameterApi alloc] init];

// Write parameter value
[apiInstance writeParameterWith:body
              completionHandler: ^(ParameterWriteResult output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

``` {.prettyprint}
var BsbLanApi = require('bsb_lan_api');
var defaultClient = BsbLanApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new BsbLanApi.ParameterApi()
var body = ; // {{ParameterWrite}} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.writeParameter(body, callback);
```

``` {.prettyprint}
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class writeParameterExample
    {
        public void main()
        {
            // Configure HTTP basic authorization: basicAuth
            Configuration.Default.Username = "YOUR_USERNAME";
            Configuration.Default.Password = "YOUR_PASSWORD";

            var apiInstance = new ParameterApi();
            var body = new ParameterWrite(); // ParameterWrite | 

            try
            {
                // Write parameter value
                ParameterWriteResult result = apiInstance.writeParameter(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ParameterApi.writeParameter: " + e.Message );
            }
        }
    }
}
```

``` {.prettyprint}
<?php
require_once(__DIR__ . '/vendor/autoload.php');
// Configure HTTP basic authorization: basicAuth
Swagger\Client\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
Swagger\Client\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new Swagger\Client\ApiParameterApi();
$body = ; // ParameterWrite | 

try {
    $result = $api_instance->writeParameter($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ParameterApi->writeParameter: ', $e->getMessage(), PHP_EOL;
}
?>
```

``` {.prettyprint}
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::ParameterApi;
# Configure HTTP basic authorization: basicAuth
$WWW::SwaggerClient::Configuration::username = 'YOUR_USERNAME';
$WWW::SwaggerClient::Configuration::password = 'YOUR_PASSWORD';

my $api_instance = WWW::SwaggerClient::ParameterApi->new();
my $body = WWW::SwaggerClient::Object::ParameterWrite->new(); # ParameterWrite | 

eval { 
    my $result = $api_instance->writeParameter(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ParameterApi->writeParameter: $@\n";
}
```

``` {.prettyprint}
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint
# Configure HTTP basic authorization: basicAuth
swagger_client.configuration.username = 'YOUR_USERNAME'
swagger_client.configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = swagger_client.ParameterApi()
body =  # ParameterWrite | 

try: 
    # Write parameter value
    api_response = api_instance.write_parameter(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ParameterApi->writeParameter: %s\n" % e)
```

Parameters
----------

Body parameters

|Name|Description|
|:---|:----------|
|body \*||

Responses
---------

### Status: 200 - OK

-   [Schema](#responses-writeParameter-200-schema)

### Status: 401 - Unauthorized

* * * * *

Suggestions, contact, support and error reporting;

Information URL: [https://github.com/fredlcore/BSB-LAN](https://github.com/fredlcore/BSB-LAN)

Contact Info: [hello@helloreverb.com](hello@helloreverb.com)

All rights reserved

http://apache.org/licenses/LICENSE-2.0.html
