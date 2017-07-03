
var textarray = [
    "Nổi tiếng nhưng là chuyện Phù Dung sớm nở tối tàn. Người thì luôn có biến, thần tượng lại càng dễ dàng biến đổi.Không ai có thể làm cho người khác thích mình mãi, không nên được cái nhất thời mà đầu óc mê muội. Nếu có một ngày bạn rơi vào một vị trí mình không chịu được, thì phải làm sao đây? Tôi có thể nhìn thấy cái ngày này, cho nên ta tự nhủ chuẩn bị tâm lý thật tốt. Tác phẩm chính là vốn liếng duy nhất, làm một người có thái độ, có nguyên tắc, có suy nghĩ độc lập, không đi theo phong trào, không làm một thần tượng chỉ như bao tải. Thà rằng không ai thích mình, nhưng như vậy mới là chính mình."  ,
    "“Dã tâm” là từ mà các nữ diễn viên trốn còn không kịp, đây đã là thời đại nào rồi, nếu như có cái gì bạn cũng đều không theo đuổi, thì trừ khi có người đã bảo vệ bạn thật tốt rồi… Nhưng mà chúng ta phải hiện thực một chút, con người nếu sống mà không có theo đuổi cái gì, thì còn ý nghĩa gì nữa chứ?",
    "Ngủ một giấc thật ngon, ngủ ngon rồi thì chuyện gì cũng tốt, phụ nữ đẹp là khi ngủ, màu sắc rực rỡ của da dẻ có thể tản ra, bởi vì tất cả hạnh phúc đều đã hấp thu vào trong rồi.",
    "Nếu như quyết định cùng đối phương cùng nhau bước tiếp, thì cần hiểu được định nghĩa của bao dung, thấu hiểu, tín nhiệm. Không được dễ dàng từ bỏ đối phương, cần phải ủng hộ đối phương đi làm chuyện bản thân họ muốn làm. Tình yêu là chuyện của hai người, hôn nhân cũng là chuyện của hai người. Đã là người trưởng thành rồi, cần phải hiểu được cách trân trọng, không nên keo kiệt những thứ bản thân bỏ ra và tình yêu. ",
    " Tự bản thân tôi đem tôi trở thành hình mẩu của mình, tôi đã đem mình biến thành người mình thích rồi."
	
];

function RndText() 
{
    var rannum = Math.floor(Math.random() * textarray.length);
    
    $('#random_text').fadeToggle( "normal", "linear", function() { 
        $('#random_text').text(textarray[rannum]).fadeToggle( "slow", "linear" );
		
    });
}


$(function() {
    // Call the random function when the DOM is ready:
	RndText()
			$('.box').click (function(){
			RndText(); 
});
});
