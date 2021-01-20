

function enterCandidates(code)
{

	courses = {"0610/CY": ["0900", "0902", "0906", "0907", "0912", "0913", "0921", "0922", "0923", "0927", "0934", "0941", "0943", "0951", "0952", "0954", "0956", "0960", "0966", "0976", "0978", "0905", "0914", "0961", "0908", "0939", "0947"], "0450/Y": ["0900", "0901", "0903", "0904", "0912", "0913", "0917", "0921", "0922", "0925", "0927", "0928", "0931", "0932", "0934", "0938", "0941", "0943", "0944", "0945", "0946", "0949", "0952", "0953", "0954", "0956", "0957", "0960", "0962", "0965", "0966", "0967", "0970", "0974", "0975", "0976", "0983", "0955", "0918", "0935", "0939", "0969", "0971", "0972", "0973", "0984"], "0620/CY": ["0900", "0902", "0906", "0907", "0912", "0913", "0921", "0922", "0923", "0927", "0934", "0941", "0943", "0951", "0952", "0954", "0956", "0960", "0966", "0976", "0978", "0905", "0914", "0961", "0908", "0939", "0947", "0990"], "0445/CY": ["0900", "0903", "0917", "0924", "0929", "0931", "0938", "0941", "0946", "0952", "0954", "0966", "0975", "0905", "0914", "0955", "0935", "0972", "0973"], "0500/BS": ["0900", "0902", "0906", "0907", "0909", "0910", "0912", "0913", "0915", "0921", "0922", "0924", "0925", "0927", "0928", "0929", "0931", "0932", "0934", "0936", "0938", "0941", "0943", "0944", "0945", "0948", "0951", "0952", "0953", "0954", "0956", "0957", "0960", "0962", "0963", "0970", "0974", "0976", "0977", "0978", "0980", "0983", "0905", "0914", "0961", "0979", "0908", "0918", "0947", "0971", "0990", "0802"], "0475/CY": ["0900", "0902", "0906", "0909", "0910", "0912", "0913", "0915", "0921", "0922", "0924", "0925", "0927", "0928", "0929", "0931", "0932", "0934", "0936", "0938", "0941", "0943", "0944", "0945", "0948", "0951", "0952", "0953", "0954", "0956", "0957", "0960", "0962", "0963", "0970", "0974", "0976", "0977", "0978", "0980", "0983", "0905", "0914", "0961", "0979", "0908", "0918", "0947", "0971", "0802"], "0460/BY": ["0900", "0901", "0902", "0903", "0906", "0907", "0909", "0910", "0912", "0915", "0917", "0921", "0923", "0924", "0926", "0927", "0934", "0944", "0946", "0956", "0960", "0963", "0965", "0967", "0970", "0977", "0978", "0980", "0983", "0905", "0908", "0939", "0950", "0969", "0990", "0802"], "0547/Y": ["0900", "0906", "0921", "0938", "0952", "0962", "0976", "0980"], "0625/CY": ["0900", "0902", "0906", "0907", "0912", "0913", "0921", "0922", "0923", "0927", "0934", "0941", "0943", "0951", "0952", "0954", "0956", "0960", "0966", "0976", "0978", "0905", "0914", "0961", "0908", "0939", "0947", "0990"], "0654/CY": ["0901", "0903", "0909", "0910", "0915", "0917", "0924", "0926", "0928", "0929", "0931", "0932", "0936", "0938", "0944", "0946", "0948", "0949", "0953", "0957", "0962", "0963", "0965", "0967", "0970", "0975", "0977", "0980", "0983", "0955", "0979", "0916", "0918", "0950", "0971", "0984", "0802"], "0510/FY": ["0901", "0903", "0923", "0946", "0949", "0965", "0966", "0955", "0939", "0950", "0972", "0984", "Candidate Number", "1028", "1028", "1029", "1029", "1036", "1036", "1048", "1048", "1058", "1058", "1099", "1099", "1108", "1108"], "0410/Y": ["0901", "0928", "0932", "0974"], "0518/A": ["0901", "0902", "0903", "0904", "0906", "0907", "0909", "0913", "0917", "0921", "0922", "0924", "0925", "0926", "0927", "0928", "0932", "0941", "0943", "0946", "0948", "0949", "0951", "0952", "0953", "0954", "0960", "0962", "0965", "0966", "0967", "0970", "0974", "0975", "0976", "0978", "0983", "0905", "0914", "0955", "0961", "0908", "0916", "0935", "0947", "0950", "0969", "0971", "0972", "0973", "0990", "0984", "0802"], "0520/Y": ["0902", "0904", "0907", "0910", "0915", "0934", "0936", "0944", "0948", "0951", "0956", "0957", "0963", "0979", "0916", "0918"], "0470/AY": ["0902", "0907", "0912", "0924", "0929", "0932", "0936", "0948", "0951", "0974", "0979", "0918", "0971"], "0413/AY": ["0903", "0904", "0910", "0931", "0934", "0937", "0944", "0957", "0965", "0966", "0975", "0977", "0961", "0947"], "0653/GY": ["0904", "0937", "0935", "0973"], "0500/AS": ["0904", "0926", "0937", "0967", "0916", "0969"], "0478/AY": ["0906", "0927", "0949", "0951", "0954", "0956", "0978"], "0417/DY": ["0909", "0926", "0953", "0957", "0962", "0967"], "0530/Y": ["0912", "0923", "0945"], "0445/AY": ["0913", "0963"], "0455/Y": ["0915", "0922", "0923", "0926", "0929", "0943", "0945", "0953", "0908", "0947", "0950"], "0510/AY": ["0917", "0975", "0935", "0973"], "0653/CY": ["0925", "0945", "0974", "0969", "0972"], "0411/AY": ["0925", "0936", "0938", "0943", "0980"], "0523/A": ["0929", "Candidate Number", "1001", "1001"], "9481/S": ["0793", "0810", "0851", "0863", "0865", "0874", "0882", "0888", "0884"], "9607/SY": ["0793", "0820", "0826", "0842", "0844", "0874", "0887", "0888", "0895", "0896", "1152", "1160", "1163", "1165", "1168"], "9708/SY": ["0795", "0821", "0824", "0838", "0870", "0871", "0875", "0882", "0885", "0896", "1152", "1154", "1157", "1158", "0807", "0877", "1156", "0834", "0889", "0899", "1161", "1175", "1174", "0755", "0791"], "9479/S": ["0823", "0842", "0848", "0881", "0897", "1153", "1160", "1165", "1168", "1169"], "9626/SY": ["1154", "1157", "1158", "1167", "0880", "0771"], "9618/SY": ["0808", "0825", "0834", "0845", "0856", "0889", "0891", "0898", "0899", "1151", "1161", "0829", "1175"], "9608/BY": ["0698", "0705", "0717", "0722", "0747", "0755", "0762"], "9708/BY": ["0701", "0703", "0706", "0718", "0726", "0727", "0737", "0739", "0754", "0758", "0762", "0776", "0788", "0796", "0799"], "9607/BY": ["0709", "0724", "0747", "0759", "0764", "0766", "0777"], "9481/B": ["0724", "0766"], "9479/B": ["0742", "0747", "0757", "0763", "0771"], "8685": ["0744", "0767", "0775"], "9479/SY": ["0792"], "0547/Y ": ["1000"]}

	let candidates = courses[code];

	let rows = document.getElementsByTagName("tr");
	for (let i=3; i<rows.length-2; i++)
	{
		let row = rows[i];
		for (let c in candidates)
		{
 			let search = candidates[c];

			if (row.getElementsByClassName("textRight")[0].firstChild.innerHTML == search)
			{
				rows[i].getElementsByTagName("input")[1].checked = true;
			}
	
		}
	}
		

}