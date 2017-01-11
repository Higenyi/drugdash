## DrugDash
DrugDash is an information system to help health centers and NMS manage EMHS stock levels through dashboards that support quick decision making.

### Features


### Included here
This is the prototype of what we think the vision will look like. The full product will have a database for data storage. The data we are going to use here is going to be dummy data. We will use JSON.


### Website
[Read more about the product][upaccelerate] here and vote for us.

###How it will work( A bit of technical information)
* We will have a db and and and API as an interface. The database will be pre-populated with product codes for the essential supplies. We will require that dispatches have these codes printed on them inform of QR codes.
* At the different health center level, once supplies are delivered, someone will scan the QR with a phone app  and we present them with a field to input the quantiles delivered. Obviously the quantities will have diff measures. Syringes and plasters will be measured differently from actual tablets but the quantity of measure will still be part of the master data.
* Alternatively we can just use Optical Character recognition to process the forms that are signed when drugs are delivered at a facility. From just that point, NMS can track their dispatches and know which ones have made it to the destination and the ones that haven't and take action
* Consumption wise, they already have  systems for this. We will just require them to take a picture of the form  they fill out weekly and we will process it to know which quantities have been used for a given facility. Different systems that are already at these facilities also  also have built in export modules and we can leverage some of this data like diagnoses and prescriptions per health center to track consumption.
* When we do the maths, we can quickly see who is running out of what, and see how much has been consumed over which period of time and show an estimate of when the supply might run out, of course using graphs to make it easy to make sense of the information.
* With this, there is oversight at district level and facility level. someone can easily see which facilities have supplies are not utilized and decide to make a request for these to be moved from one place to another. once a transfer request has been accepted, stock levels will be automatically updated at facility level.
* We intend keep track of metadata. We know which batches will expire when and can provide notifications on the dashboard the concerned parties and they can act accordingly.
* Big data analytics comes in overtime to show which facilities use what most. Future supplies can be based off of this. We also intend to give this information to bodies like NMS and JMS that are responsible for procuring and distributing these drugs to the facilities to inform them on what the market trends are so they procure relevant material.
* Also we intend to work closely with other systems, like openMRS that are keeping track of patient information like prescriptions to be able to have a clearer picture of what supplies are being dispensed against what was delivered and this will help in effective planning.





[upaccelerate]: http://upaccelerate.co.ug/submission/drugdash/