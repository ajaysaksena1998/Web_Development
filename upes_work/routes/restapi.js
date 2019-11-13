const router= require('express').Router()
const bodyParser= require('body-parser')
const User= require('../models/Abstract')
const Fast= require('../models/synop')
var stuid=0
var ename=0
var dates=0
var formtype=null
var v1=0
var v2=0
var v31=0
var v32=0
var v4=0
var v5=0
var vv1=0
var vv2=0
var vv31=0
var vv32=0
var vv4=0
var vv5=0
var vv6=0
var v6
var v7
var v8
var v9
var v10
var v20
var v30
var v40
var v50
var v60
var v70
var v80
var v90
var vas
var vvs
var vas2
var vvs2
var vas3
var vvs3
var vv7
var vv8
var vv9
var vv10
var vv20
var vv30
var vv40
var vv50
var vv60
var vv70
var vv80
var vv90
var sum=0
router.use(bodyParser .urlencoded({extended:true}))
router.get('/', (req,res)=>{
	res.render("login.ejs")
})
router.post('/adddetails',async (req,res)=>{
	console.log(req.body);
	stuid= req.body.studentid
	ename= req.body.ename
	dates= req.body.date
	formtype= req.body.formtype
	if(req.body.formtype=="abstract"){
		res.render("abstract.ejs",{stuid:stuid, ename:ename, dates:dates})
	}
	else if(req.body.formtype=="synopsis")
		{
			res.render("synopsis.ejs",{stuid:stuid, ename:ename, dates:dates})
		}
})
router.post('/success',async (req,res)=>{

	desc1="1. Achievement of Aim and Objectives: Stated solution clearly for the research problem;  Strategic breakdown of solution through objective is quantified and achievement is effective"
	desc2="2. Stability in Methodology: Sound state‐of‐the-art research methodology to solve; Used modern methods and tools associated in developing solution."
	desc3="3. Novelty and Contribution – Research Impact: Demonstrated potential value of solution or  contribution to the research problem in advancing knowledge within and outside the area/field of study. Demonstrated awareness of broad implications or research; Broader impacts may include societal, economic, technical, ethical, technological or business aspects"
	desc4="4. Validation of Results and Evaluation: Demonstrated sound knowledge in the area, Prior literature on specific research problem. Analyzed and interpreted Research data effectively.	"
	desc5="5. Quality of Written and Oral Skills: Research Thesis (a) written and (b) Defense"
	stuid=stuid
	ename=ename
	dates=dates
	if(req.body.val1==1)
		{
			v1=0.1
			vv1="Objectives and thereby aim is incomplete or unmet"
		}
	else if(req.body.val1==2)
		{
			v1=0.5
			vv1="Aim and Objectives are achieved but partially quantifiable in terms of outcomes"
		}
	else if(req.body.val1==3)
	{
		v1=1
		vv1="Aim and Objectively are clearly achieved and outcomes are also quantified in respective of them"
	}
	if(req.body.val2==1)
		{
			v2=0.2
			vv2="Methodology is lacking usage of out-of-box techniques for more and effective solution"
		}
	else if(req.body.val2==2){
		v2=1
		vv2="Methodology is partially effective and has adapted from existing with very limited changes"
	}
	else if(req.body.val2==3){
		v2=2
		vv2="Stability in the methodology is reflected with a definite state of art and has used very recent advancements to conduct "
	}
	if(req.body.val31==1)
		{
			v31=0.2
			vv31="No Significant contribution made and no visible novelty demonstrated. Solution provided is obsolete, hence not very valued within or outside the field of study"
		}
	else if(req.body.val31==2)
		{
			v31=1
			vv31="Demonstrated a decent contribution, however the contribution lacks novelty to make a greater impact to the field of study"
		}
	else if(req.body.val31==3)
	{
		v31=2
		vv31="Quantitatively demonstrated Novelty in the research and made a potential contribution to conceptual / fundamental knowledge in the area of study. Demonstrated in SCI indexed publication"
	}
	if(req.body.val32==1)
		{
			v32=0.1
			vv32="Research is only theoretical, no commercial or practical aspect"
		}
	else if(req.body.val32==2){
		v32=0.5
		vv32="Research is having a commercial angle however, not explored"
	}
	else if(req.body.val32==3){
		v32=1
		vv32="Commercial aspect addressed through patent publication"
	}	
	if(req.body.val4==1)
		{
			v4=0.3
			vv4="Results obtained are not substantial enough to validate the achievement of aim. Poor evaluation shown"
		}
	else if(req.body.val4==2){
		v4=1.5
		vv4="Demonstrated relevant results to achieve aim and objectives, reflected the quality of results using SCOPUS indexed publication"
	}
	else if(req.body.val4==3){
		v4=3
		vv4="Extensive and critical results that demonstrate achievement of aim and contribution. Reflected the quality of results using premier SCI indexed publication"
	}
	if(req.body.val5==1)
		{
			v5=0.1
			vv5="Poor written and oral communication"
		}
	else if(req.body.val5==2){
		v5=0.5
		vv5="Marginal written and oral skills, have to improve the quality of draft and defense"
	}
	else if(req.body.val5==3){
		v5=1
		vv5="Excellent writing and oral skills"
	}
	
	sum=v1+v2+v31+v32+v4+v5
	
	const user= new User({
		Evaluator:ename,
		Studentid: stuid,
		Date: dates,
		formtype: formtype,
		desc1: desc1,
		d1:vv1,
		val1:v1,
		desc2: desc2,
		d2:vv2,
		val2:v2,
		desc3: desc3,
		d31:vv31,
		val31:v31,
		d32:vv32,
		val32:v32,
		desc4: desc4,
		d4:vv4,
		val4:v4,
		desc5: desc5,
		d5:vv5,
		val5:v5,
		sum:sum,
		comment:req.body.comment
	})
	try{
		const savedUser = await user.save()
	}catch(err){
		res.status(400).send(err)
	}
	res.render("success.ejs")
})

router.post("/final",async (req,res)=>{
	
	desc1="1. Problem Definition‐Hypothesis:Stated research problem clearly;Motivation for undertaking the research."
	desc2="2. Specific Aim and Objectives:Provided succinct aim with clarity;Logical and quantifiable objectives with feasibility of completion"
	desc3="3. Contribution ‐ Impact of Proposed Research: Demonstrated the potential value of solution or contribution to the research problem in advancing knowledge within and outside the area/field of study."
	desc4="4. Subject and Literature of Previous Work: Demonstrated sound knowledge in the area, Prior literature on specific research problem.Preliminary Findings: Analyzed and interpreted Research data effectively.	"
	desc5="5. Methodology & Evaluation Approach: Sound state‐of‐the-art research methodology to solve; Described methods and tools associated in developing solution effectively Defined evaluation criteria"
	desc6="6. Scope of Research Work: Demonstrated awareness of broad implications or research; Broader impacts may include societal, economic, technical, ethical, technological or business aspects"
	desc7="7. Critical Thinking: Demonstrated capability for independent research in the area of study; significant expertise in the area, and ability to make original contributions to the field."
	desc8="8. Quality of Written and Oral Communication: Research Proposal (a) written and (b) oral presentation Gantt Chart with bi-monthly outcomes and milestones"
	
	if(req.body.val1==1)
		{
			v1=0
			vv1="Arguments are incorrect, incoherent, or flawed"
		}
	else if(req.body.val1==2)
		{
			v1=1
			vv1="Arguments are coherent and clear"
		}
	else if(req.body.val1==3)
	{
		v1=2
		vv1="Arguments are superior"
	}
	if(req.body.val2==1)
		{
			v2=1
			vv2="Application problem"
		}
	else if(req.body.val2==2)
		{
			v2=2
			vv2="Marginally research problem"
		}
	else if(req.body.val2==3)
	{
		v2=3
		vv2="Core research problem"
	}
	if(req.body.val3==1)
		{
			v31=1
			vv31="Problem statement is not Clear"
		}
	else if(req.body.val3==2)
		{
			v31=3
			vv31="Problem statement need to modify"
		}
	else if(req.body.val3==3)
	{
		v31=5
		vv31="Problem statement is acceptable"
	}
	if(req.body.a2==1)
		{
			v32=3
			vv32="Objectives are poorly defined"
		}
	else if(req.body.a2==2)
		{
			v32=6
			vv32="Objectives are clear"
		}
	else if(req.body.a2==3)
	{
		v32=9
		vv32="Well defined Objectives"
	}
	
	if(req.body.b2==1)
		{
			v4=1
			vv4="No potential of novelty"
		}
	else if(req.body.b2==2)
		{
			v4=4
			vv4="Partial potential for novelty"
		}
	else if(req.body.b2==3)
	{
		v4=7
		vv4="Has novelty potential"
	}
	
	if(req.body.c2==1)
		{
			v5=1
			vv5="Limited / infeasible"
		}
	else if(req.body.c2==2)
		{
			v5=2
			vv5="Partial Feasibility"
		}
	else if(req.body.c2==3)
	{
		v5=4
		vv5="Acceptable feasibility"
	}
	
	
	if(req.body.a31==1)
		{
			v6=0
			vv6="Limited / no expansion upon previous research"
		}
	else if(req.body.a31==2)
		{
			v6=3
			vv6="Builds upon previous research"
		}
	else if(req.body.a31==3)
	{
		v6=6
		vv6="Acceptable extension of previous research"
	}
	
	if(req.body.a32==1)
		{
			v7=4
			vv7="Limited potential for success"
		}
	else if(req.body.a32==2)
		{
			v7=6
			vv7="Marginal potential for success"
		}
	else if(req.body.a32==3)
	{
		v7=8
		vv7="Acceptable potential for discovery"
	}
	
	if(req.body.a33==1)
		{
			v8=2
			vv8="Limited theoretical or applied significance"
		}
	else if(req.body.a33==2)
		{
			v8=4
			vv8="Reasonable theoretical or applied significance"
		}
	else if(req.body.a33==3)
	{
		v8=6
		vv8="Acceptable theoretical or applied significance"
	}
	
	if(req.body.a4==1)
		{
			v9=1
			vv9="Reflects poor understanding of subject and associated literature"
		}
	else if(req.body.a4==2)
		{
			v9=2
			vv9="Reflects understanding of subject and associated literature"
		}
	else if(req.body.a4==3)
	{
		v9=3
		vv9="Reflects mastery of subject and associated literature"
	}
	
	if(req.body.b4==1)
		{
			v10=0
			vv10="Demonstrates poor understanding of fundamental concepts"
		}
	else if(req.body.b4==2)
		{
			v10=2
			vv10="Demonstrates understanding of fundamental concepts"
		}
	else if(req.body.b4==3)
	{
		v10=4
		vv10="Demonstrates mastery of fundamental concepts"
	}
	
	if(req.body.c4==1)
		{
			v20=0
			vv20="No / Irrelevant result"
		}
	else if(req.body.c4==2)
		{
			v20=2
			vv20="Results are OK"
		}
	else if(req.body.c4==3)
	{
		v20=3
		vv20="Results are remarkable"
	}
	
	if(req.body.a5==1)
		{
			v30=0
			vv30="Proposed methodology is missing / ineffective"
		}
	else if(req.body.a5==2)
		{
			v30=4
			vv30="Inadequate knowledge of proposed methods and tools"
		}
	else if(req.body.a5==3)
	{
		v30=8
		vv30="Evaluation criteria missing / vague"
	}
	
	if(req.body.b5==1)
		{
			v40=1
			vv40="Inadequate knowledge of proposed methods and tools"
		}
	else if(req.body.b5==2)
		{
			v40=3
			vv40="Knowledge of proposed methods and tools is average"
		}
	else if(req.body.b5==3)
	{
		v40=6
		vv40="Acceptable Knowledge of proposed methods and tools"
	}
	
	if(req.body.c5==1)
		{
			v50=0
			vv50="Evaluation criteria missing / vague"
		}
	else if(req.body.c5==2)
		{
			v50=3
			vv50="Evaluation criteria unclear / ineffective"
		}
	else if(req.body.c5==3)
	{
		v50=6
		vv50="Acceptable evaluation criteria and effective"
	}
	
	if(req.body.a6==1)
		{
			v60=1
			vv60="Application area is not demonstrated"
		}
	else if(req.body.a6==2)
		{
			v60=2
			vv60="Application area of research work is covered marginally"
		}
	else if(req.body.a6==3)
	{
		v60=3
		vv60="Application of the work is demonstrated well"
	}
	
	if(req.body.b6==1)
		{
			v70=0
			vv70="The research outcome is unethical / immoral"
		}
	else if(req.body.b6==2)
		{
			v70=1
			vv70="The work is ethical enough"
		}
	else if(req.body.b6==3)
	{
		v70=2
		vv70="The work is principled"
	}
	
	
	
	if(req.body.a7==1)
		{
			v80=0
			vv80="Demonstrates rudimentary critical thinking skills"
		}
	else if(req.body.a7==2)
		{
			v80=2
			vv80="Demonstrates average critical thinking skills"
		}
	else if(req.body.a7==3)
	{
		v80=4
		vv80="Exhibits mature, critical thinking skills"
	}
	
	if(req.body.b7==1)
		{
			v90=0
			vv90="Demonstrates limited originality"
		}
	else if(req.body.b7==2)
		{
			v90=2
			vv90="Demonstrates originality"
		}
	else if(req.body.b7==3)
	{
		v90=4
		vv90="Demonstrates acceptable originality"
	}
	
	if(req.body.a8==1)
		{
			vas=1
			vvs="Organization and Documentation is poor"
		}
	else if(req.body.a8==2)
		{
			vas=2
			vvs="Organization is logical and adequate documentation"
		}
	else if(req.body.a8==3)
	{
		vas=3
		vvs="Organization and Documentation is poor"
	}
	
	if(req.body.b8==1)
		{
			vas2=0
			vvs2="Poor oral skill"
		}
	else if(req.body.b8==2)
		{
			vas2=1
			vvs2="Average oral skill"
		}
	else if(req.body.b8==3)
	{
		vas2=2
		vvs2="Acceptable oral skill"
	}
	
	if(req.body.c8==1)
		{
			vas3=0
			vvs3="Unrealistic progress charted"
		}
	else if(req.body.c8==2)
		{
			vas3=1
			vvs3="Unrealistic progress charted"
		}
	else if(req.body.c8==3)
	{
		vas3=2
		vvs3="Need amendments for achievability"
	}
	sum=v1+v2+v31+v32+v4+v5+v6+v7+v8+v9+v10+v20+v30+v40+v50+v60+v70+v80+v90+vas+vas2+vas3
	console.log(sum)
	const fast= new Fast({
		Evaluator:ename,
		Studentid: stuid,
		Date: dates,
		formtype: formtype,
		desc1: desc1,
		d11:vv1,
		val11:v1,
		d12:vv2,
		val12:v2,
		d13:vv31,
		val13:v31,
		desc2: desc2,
		d21:vv32,
		val21:v32,
		d22:vv4,
		val22:v4,
		d23:vv5,
		val23:v5,
		desc3: desc3,
		d31:vv6,
		val31:v6,
		d32:vv7,
		val32:v7,
		d33:vv8,
		val33:v8,
		desc4: desc4,
		d41:vv9,
		val41:v9,
		d42:vv10,
		val42:v10,
		d43:vv20,
		val43:v20,
		desc5: desc5,
		d51:vv30,
		val51:v30,
		d52:vv40,
		val52:v40,
		d53:vv50,
		val53:v50,
		desc6: desc6,
		d61:vv60,
		val61:v60,
		d62:vv70,
		val62:v70,
		desc7: desc7,
		d71:vv80,
		val71:v80,
		d72:vv90,
		val72:v90,
		desc8: desc8,
		d81:vvs,
		val81:vas,
		d82:vvs2,
		val82:vas2,
		d83:vvs3,
		val83:vas3,
		sum:sum,
		comment: req.body.comment
	})
	try{
		const savedUser = await fast.save()
	}catch(err){
		res.status(400).send(err)
	}
	
	
	console.log(req.body)
	res.render("final.ejs")
})
module.exports=router