const { Blog } = require('../models');

const BlogData = [
    {
        "title":"EXERCISE DAILY",
        "textarea":"Did you know that daily exercise can reduce all of the biomarkers of aging? This includes improving eyesight, normalizing blood pressure, improving lean muscle, lowering cholesterol, and improving bone density. If you want to live well and live longer, you must exercise! Studies show that even ten minutes of exercise makes a difference — so do something! Crank the stereo and dance in your living room. Sign up for swing dancing or ballroom dancing lessons. Walk to the park with your kids or a neighbor you’d like to catch up with. Jump rope or play hopscotch. Spin a hula hoop. Play water volleyball. Bike to work. Jump on a trampoline. Go for a hike. These are all great things to do to improve your health."
    },
    {
        "title":"THINK POSITIVE AND FOCUS ON GRATITUDE",
        "textarea":"Research shows a healthy positive attitude helps build a healthier immune system and boosts overall health. Your body believes what you think, so focus on the positive. This is a great first tip for how to ensure you have a healthy body and mind in order to live a healthier lifestyle!"
    },
                
    {
        "title":"GET A GOOD NIGHT'S SLEEP",
        "textarea":"If you have trouble sleeping, try relaxation techniques such as meditation and yoga. Or eat a small bedtime snack of foods shown to help shift the body and mind into sleep mode: whole grain cereal with milk, oatmeal, cherries, or chamomile tea. Darken your room more and turn your clock away from you. Write down worries or stressful thoughts to get them out of your head and onto the page. This will help you put them into perspective so you can quit worrying about them."
        
     
    },            
    {
        "title":"USE FOODS OVER SUPPLEMENTS",
       "textarea": "Supplements are not a substitute for a good diet. Although many health experts recommend taking a multivitamin and mineral supplement that provides 100 to 200 percent of your recommended daily value, each and every supplement should be carefully evaluated for purity and safety."

    },

    {
        "title":"EAT LIKE A KID",
        "textarea":"If adding more fruits and vegetables sounds ominous, look to “finger food” versions that preschool kids love — carrot and celery sticks, cherry tomatoes, broccoli florets, grapes, berries, and dried fruits. All are nutritional powerhouses packed with antioxidants which will lead to living a healthier lifestyle. Eating like  a kid is one of our tips on how to maintain good health."
    },

    {
        "title":"THINK SMALL",
        "textarea":"Often the biggest deterrent to improving health is feeling overwhelmed by all the available advice and research. Try to focus first on one small, seemingly inconsequential, unhealthy habit and turn it into a healthy, positive habit"
    }
];

const seedBlog = () => Blog.bulkCreate(BlogData);

module.exports = seedBlog