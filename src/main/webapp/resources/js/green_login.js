

function check() {
	$("#id").val($("#id").val().replace(/(\s*)/g,""));
}
$(function() {
	$("#kakaologin").click(function(){
		Kakao.init("b368023ab0ada558460c961fcfa59892");
		Kakao.Auth.login({
			success : function(authObj) {
				Kakao.API.request({
					url : '/v2/user/me',
					success : function(res) {
						var email = res.kakao_account.email;
						location.href="kakaoregist.do?email="+email;
					}
				})
			},
			fail : function(err) {
				alert(JSON.stringify(err));
			}
		})
	})
})

